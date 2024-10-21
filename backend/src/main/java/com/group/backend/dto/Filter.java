package com.group.backend.dto;

import lombok.Data;

@Data
public class Filter {
    String brand;
    String status;
    String cpu;
    String vga;
    String ram;
    String ssd;
    String screenSize;
    String sortBy;
    String sortOrder;
    int minPrice;
    int maxPrice;

}
