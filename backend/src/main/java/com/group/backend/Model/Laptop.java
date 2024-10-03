package com.group.backend.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "laptop")
public class Laptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;
    private long SpecID;
    private String Name;
    private String Brand;
    private int Price;
    private String Status;
    private short Sale;
    private boolean Available;
}
