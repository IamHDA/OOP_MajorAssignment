package com.group.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "laptop")
public class Laptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String name;
    private String brand;
    private int price;
    private String status;
    private short sale;
    private boolean available;

    @OneToOne
    @JoinColumn(name = "specification_id", nullable = false)
    private Specification specification;

    @OneToMany(mappedBy = "laptop")
    private List<Cart_Detail> cartDetails;

    @OneToMany(mappedBy = "laptop")
    private List<Comment> comments;

    @OneToMany(mappedBy = "laptop")
    private List<Image> images;

    @OneToMany(mappedBy = "laptop")
    private List<Order_Detail> orderDetails;

    @OneToMany(mappedBy = "laptop")
    private List<Laptop_Category> laptopCategories;
}
