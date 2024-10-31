package com.group.backend.dto;

import com.group.backend.entity.Image;
import lombok.Data;

import java.util.List;

@Data
public class LaptopSummaryDTO {
    private int id;
    private String name;
    private int price;
    private int sale;
    private List<Image> images;
}
