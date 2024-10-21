package com.group.backend.controller;

import com.group.backend.entity.Token;
import com.group.backend.repository.TokenRepository;
import jakarta.validation.constraints.Future;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {

    @Autowired
    private TokenRepository tokenRepository;

    @GetMapping("/home")
    public String home(){
        return "This is home page.";
    }

    @GetMapping("getTokens")
    public List<Token> getAllTokens(){
        return tokenRepository.findAll();
    }
}
