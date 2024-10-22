package com.group.backend.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "laptop")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Laptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String name;
    private String brand;
    private int price;
    private short sale;
    private boolean available;

    @OneToOne
    @JoinColumn(name = "specification_id", nullable = false)
    private Specification specification;

    @OneToMany(mappedBy = "laptop")
    private List<Cart_Detail> cartDetails;

    @OneToMany(mappedBy = "laptop")
    @JsonIgnoreProperties
    private List<Comment> comments;

    @OneToMany(mappedBy = "laptop")
    private List<Image> images;

    @OneToMany(mappedBy = "laptop")
    private List<Order_Detail> orderDetails;

    @OneToMany(mappedBy = "laptop")
    private List<Laptop_Category> laptopCategories;
}
