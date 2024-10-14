package com.group.backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "shippingMethod")
public class Shipping_Method {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int price;

    @ManyToOne
    @JoinColumn(name = "customerOrder_id")
    private Order order;
}
