package com.group.backend.Service;

import com.group.backend.Config.AuthenticationResponse;
import com.group.backend.Entity.Token;
import com.group.backend.Entity.User;
import com.group.backend.Respository.TokenRepository;
import com.group.backend.Respository.UserRespository;
<<<<<<< HEAD
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
=======
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
>>>>>>> 5abbf03 (response token)
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

<<<<<<< HEAD
=======
    public BCryptPasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

>>>>>>> 5abbf03 (response token)
    public AuthenticationService(UserRespository userRepo, JwtService jwtService, AuthenticationManager authenticationManager, TokenRepository tokenRepository) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.tokenRepository = tokenRepository;
    }

<<<<<<< HEAD
    public BCryptPasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }

    public AuthenticationResponse register(@RequestBody User request){
=======
    public AuthenticationResponse register(@RequestBody User request) {
>>>>>>> 5abbf03 (response token)
        User user = new User();

        user.setUsername(request.getUsername());
        user.setPass(encoder().encode(request.getPass()));
        user.setRoleID(false);

        userRepo.save(user);

<<<<<<< HEAD
        String jwtToken = jwtService.generateToken(user);
        saveUserToken(jwtToken, user);

        return new AuthenticationResponse(jwtToken);
    }

    public AuthenticationResponse login(@RequestBody User request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPass()));

        User user = userRepo.findByUsername(request.getUsername());
        String jwtToken = jwtService.generateToken(user);

        List<Token> validTokeByUser = tokenRepository.findAllTokenByUser(user.getId());
        if(!validTokeByUser.isEmpty()){
            validTokeByUser.forEach(t -> {
=======
        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(accessToken, refreshToken, user);

        return new AuthenticationResponse(accessToken, refreshToken);
    }

    public AuthenticationResponse login(@RequestBody User request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPass()));

        User user = userRepo.findByUsername(request.getUsername()).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        List<Token> validTokenByUser = tokenRepository.findAllAccessTokenByUser(user.getId());
        if (!validTokenByUser.isEmpty()) {
            validTokenByUser.forEach(t -> {
>>>>>>> 5abbf03 (response token)
                t.setLoggedOut(true);
            });
        }

<<<<<<< HEAD
        tokenRepository.saveAll(validTokeByUser);

        saveUserToken(jwtToken, user);

        return new AuthenticationResponse(jwtToken);
    }

    private void saveUserToken(String jwtToken, User user) {
        Token token = new Token();
        token.setToken(jwtToken);
=======
        tokenRepository.saveAll(validTokenByUser);

        saveUserToken(accessToken, refreshToken, user);

        return new AuthenticationResponse(accessToken, refreshToken);
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

            return new ResponseEntity(new AuthenticationResponse(accessToken, refreshToken), HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }

    private void saveUserToken(String accessToken, String refreshToken, User user) {
        Token token = new Token();
        token.setAccessToken(accessToken);
        token.setRefreshToken(refreshToken);
>>>>>>> 5abbf03 (response token)
        token.setLoggedOut(false);
        token.setUser(user);
        tokenRepository.save(token);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 5abbf03 (response token)
