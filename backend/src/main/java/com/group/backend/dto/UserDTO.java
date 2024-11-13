package com.group.backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UserDTO {
    private long id;
    private String name;
    private String email;
    private String address;
    private String phone;
    private LocalDate registrationDate;
    private String role;
}
