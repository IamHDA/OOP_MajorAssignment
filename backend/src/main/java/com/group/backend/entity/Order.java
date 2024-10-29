package com.group.backend.entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.List;

@Entity
@Data
@Table(name = "customerOrder")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String shippingAddress;
    private long totalPrice;
    private String note;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "shippingMethod_id")
    @JsonBackReference
    @ToString.Exclude
    private Shipping_Method shippingMethod;

    @OneToMany(mappedBy = "order")
    @JsonManagedReference
    @ToString.Exclude
    private List<Order_Detail> orderDetails;
}
