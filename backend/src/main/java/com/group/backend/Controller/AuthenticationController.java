package com.group.backend.Controller;

import com.group.backend.Entity.User;
import com.group.backend.Config.AuthenticationResponse;
import com.group.backend.Service.AuthenticationService;
<<<<<<< HEAD
=======
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
>>>>>>> 5abbf03 (response token)
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

<<<<<<< HEAD
    @Autowired
=======
>>>>>>> 5abbf03 (response token)
    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody User request){
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody User request){
        return ResponseEntity.ok(authenticationService.login(request));
    }
<<<<<<< HEAD
=======

    @PostMapping("/refresh_token")
    public ResponseEntity<AuthenticationResponse> refreshToken(HttpServletRequest request, HttpServletResponse response){
        return authenticationService.refreshToken(request, response);
    }
>>>>>>> 5abbf03 (response token)
}
