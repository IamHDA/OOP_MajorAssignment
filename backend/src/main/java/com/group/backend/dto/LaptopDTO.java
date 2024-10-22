package com.group.backend.dto;

import com.group.backend.entity.Comment;
import com.group.backend.entity.Image;
import com.group.backend.entity.Specification;
import lombok.Data;

import java.util.List;

@Data
public class LaptopDTO {

    private int id;
    private String name;
    private int price;
    private int sale;
    private boolean available;
    private Specification specification;
    private List<Image> images;
    private List<Comment> comments;
}
