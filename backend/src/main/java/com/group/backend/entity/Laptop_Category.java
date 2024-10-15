package com.group.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "laptopCategory")
public class Laptop_Category {

    @Id
    @ManyToOne
    @JoinColumn(name = "laptop_id")
    private Laptop laptop;

    @Id
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
