package com.group.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.group.backend.dto.LaptopCategoryId;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@Table(name = "laptopCategory")
@ToString
public class Laptop_Category {

    @EmbeddedId
    private LaptopCategoryId laptopCategoryId;

    @MapsId("laptopId")
    @ManyToOne
    @JoinColumn(name = "laptop_id")
    @JsonIgnore
    private Laptop laptop;

    @MapsId("categoryId")
    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonIgnore
    private Category category;

}
