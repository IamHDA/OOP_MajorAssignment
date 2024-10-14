package com.group.backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

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
