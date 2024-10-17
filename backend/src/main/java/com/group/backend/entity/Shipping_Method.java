package com.group.backend.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;
import org.aspectj.weaver.ast.Or;

import java.util.List;

@Entity
@Data
@Table(name = "shippingMethod")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Shipping_Method {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int price;

    @OneToMany(mappedBy = "shippingMethod")
    @JsonIgnore
    private List<Order> orders;
}
