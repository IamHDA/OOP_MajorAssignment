package com.group.backend.dto;

import lombok.Data;

@Data
public class CartDetailDTO {
    private long id;
    private int quantity;
    private LaptopSummaryDTO laptop;
}
