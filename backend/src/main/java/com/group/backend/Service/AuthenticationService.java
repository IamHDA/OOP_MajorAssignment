package com.group.backend.Service;

import com.group.backend.Config.AuthenticationResponse;
import com.group.backend.Entity.Token;
import com.group.backend.Entity.User;
import com.group.backend.Respository.TokenRepository;
import com.group.backend.Respository.UserRespository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class AuthenticationService {

    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserRespository userRepo;
    private final TokenRepository tokenRepository;

    public BCryptPasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    public AuthenticationService(UserRespository userRepo, JwtService jwtService, AuthenticationManager authenticationManager, TokenRepository tokenRepository) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.tokenRepository = tokenRepository;
    }


    public AuthenticationResponse register(@RequestBody User request) {
        if(userRepo.findByUsername(request.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, null, "Username is already in use");
        }

        User user = new User();

        user.setName(request.getName());
        user.setUsername(request.getUsername());
        user.setPass(encoder().encode(request.getPass()));
        user.setRole("Customer");

        userRepo.save(user);

        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        saveUserToken(accessToken, refreshToken, user);

        return new AuthenticationResponse(accessToken, refreshToken, "User registration successful");
    }


    public AuthenticationResponse login(@RequestBody User request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPass()));

        User user = userRepo.findByUsername(request.getUsername()).orElseThrow();

        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        List<Token> validTokenByUser = tokenRepository.findAllAccessTokenByUser(user.getId());
        if (!validTokenByUser.isEmpty()) {
            validTokenByUser.forEach(t -> {

                t.setLoggedOut(true);
            });
        }

        saveUserToken(accessToken, refreshToken, user);

        return new AuthenticationResponse(accessToken, refreshToken, "User login successful");
    }

    public ResponseEntity refreshToken(HttpServletRequest request, HttpServletResponse response) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
        String token = authHeader.substring(7);
        String username = jwtService.extractUsername(token);

        User user = userRepo.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        if (jwtService.isValidRefreshToken(token, user)) {
            String accessToken = jwtService.generateAccessToken(user);
            String refreshToken = jwtService.generateRefreshToken(user);

            saveUserToken(accessToken, refreshToken, user);

            return new ResponseEntity(new AuthenticationResponse(accessToken, refreshToken, "New Token generated"), HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }

    private void saveUserToken(String accessToken, String refreshToken, User user) {
        Token token = new Token();
        token.setAccessToken(accessToken);
        token.setRefreshToken(refreshToken);
        token.setLoggedOut(false);
        token.setUser(user);
        tokenRepository.save(token);
    }
}
