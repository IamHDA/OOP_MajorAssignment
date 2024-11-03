package com.group.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderDetailDTO {
    private long id;
    private int unitPrice;
    private int quantity;
    private LaptopSummaryDTO laptop;
    private OrderDTO order;
}
