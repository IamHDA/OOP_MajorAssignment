package com.group.backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "token")
@Data
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String token;
    @Column(name = "isLoggedOut")
    private boolean loggedOut;
    private String accessToken;
    @Column(name = "refreshToken")
    private String refreshToken;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
