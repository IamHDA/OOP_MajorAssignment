package com.group.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "image")
@NoArgsConstructor
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String filePath;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "laptop_id")
    private Laptop laptop;

    public Image(String filePath, Laptop laptop) {
        this.filePath = filePath;
        this.laptop = laptop;
    }
}
