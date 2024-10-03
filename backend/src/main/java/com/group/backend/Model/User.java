package com.group.backend.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String phone;
    private String username;
    private String pass;
    private boolean roleID;
    private String userAddress;

    public String getRole(){
        if(roleID) return "ADMIN";
        return "Customer";
    }
}
