package com.group.backend.Service;

import com.group.backend.Config.AuthenticationResponse;
import com.group.backend.Entity.Token;
import com.group.backend.Entity.User;
import com.group.backend.Respository.TokenRepository;
import com.group.backend.Respository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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

    public AuthenticationService(UserRespository userRepo, JwtService jwtService, AuthenticationManager authenticationManager, TokenRepository tokenRepository) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.tokenRepository = tokenRepository;
    }

    public BCryptPasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }

    public AuthenticationResponse register(@RequestBody User request){
        User user = new User();

        user.setUsername(request.getUsername());
        user.setPass(encoder().encode(request.getPass()));
        user.setRoleID(false);

        userRepo.save(user);

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
                t.setLoggedOut(true);
            });
        }

        tokenRepository.saveAll(validTokeByUser);

        saveUserToken(jwtToken, user);

        return new AuthenticationResponse(jwtToken);
    }

    private void saveUserToken(String jwtToken, User user) {
        Token token = new Token();
        token.setToken(jwtToken);
        token.setLoggedOut(false);
        token.setUser(user);
        tokenRepository.save(token);
    }
}
