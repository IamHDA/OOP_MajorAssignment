package com.group.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    @JsonBackReference
    @JoinColumn(name = "laptop_id")
    private Laptop laptop;
}
