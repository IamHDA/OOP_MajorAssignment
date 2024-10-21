package com.group.backend.entity;

import com.fasterxml.jackson.annotation.*;
import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "laptopComment")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String Comment;
    private LocalDateTime postAt;
    private LocalDateTime updateAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @ManyToOne
    @JoinColumn(name = "laptop_id")
    @JsonIgnore
    private Laptop laptop;

}
