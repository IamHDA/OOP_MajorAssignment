package com.group.backend.config;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationResponse {
    private String accessToken;
    private String refreshToken;
    private String message;

    public AuthenticationResponse(String message){
        this.message = message;
    }


}
