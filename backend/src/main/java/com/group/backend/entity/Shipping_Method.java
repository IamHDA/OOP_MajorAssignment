package com.group.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.aspectj.weaver.ast.Or;

import java.util.List;

@Entity
@Data
@Table(name = "shippingMethod")
public class Shipping_Method {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int price;

    @OneToMany(mappedBy = "shippingMethod")
    private List<Order> orders;
}
