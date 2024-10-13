package com.group.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
    @Column(name = "UserAddress")
    private String userAddress;

    @OneToMany(mappedBy = "user")
    private List<Token> tokens;

    public String getRole(){
        if(roleID) return "ADMIN";
        return "Customer";
    }
}
