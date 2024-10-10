package com.group.backend.Service;

import com.group.backend.Entity.User;
import com.group.backend.Model.UserPrincipal;
import com.group.backend.Respository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class AuthenticationService {

    @Autowired
    private final UserRespository userRepo;
    @Autowired
    private final JwtService jwtService;
    @Autowired
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(UserRespository userRepo, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
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

        String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);
    }

    public AuthenticationResponse login(@RequestBody User request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPass()));

        User user = userRepo.findByUsername(request.getUsername());
        String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);
    }
}
