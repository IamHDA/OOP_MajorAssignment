package com.group.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Filter {
    String brand;
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
