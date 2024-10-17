package com.group.backend.config;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class Encoder {
    public BCryptPasswordEncoder encode(){
        return new BCryptPasswordEncoder();
    }
}
