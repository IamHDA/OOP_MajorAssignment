package com.group.backend.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "specification")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Specification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String cpu;
    private String ram;
    private String rom;
    private String screen;
    private String graphicsCard;
    private String battery;
    private String weight;
    private String webcam;
    private String operatingSystem;

    @Column(length = 500)
    private String connectionPort;
    private boolean muxSwitch;
}
