package com.group.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "image")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String filePath;

    @ManyToOne
    @JoinColumn(name = "laptop_id")
    private Laptop laptop;
}
