package com.group.backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "specification")
public class Specification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String cpu;
    private String ram;
    private String rom;
    private String screen;
    private String graphics_card;
    private String battery;
    private float weight;
    private String webcam;
    private String operating_system;
    private String connection_port;
    private boolean mux_switch;
}
