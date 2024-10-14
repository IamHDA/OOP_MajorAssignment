package com.group.backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "customerOrder")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String shippingAddress;
    private long totalPrice;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "order")
    private List<Order_Detail> orderDetails;

    @OneToMany(mappedBy = "order")
    private List<Status> status;

    @OneToMany(mappedBy = "order")
    private List<Shipping_Method> shipping_methods;
}
