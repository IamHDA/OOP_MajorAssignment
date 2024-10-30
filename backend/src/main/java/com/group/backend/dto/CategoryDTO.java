package com.group.backend.dto;

import com.group.backend.entity.Image;
import lombok.Data;

import java.util.List;

@Data
public class CategoryDTO {
    private int id;
    private String name;
    private int price;
    private List<Image> images;
}
