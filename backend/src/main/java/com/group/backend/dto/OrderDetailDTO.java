package com.group.backend.dto;

import lombok.Data;

@Data
public class OrderDetailDTO {
    private long id;
    private int unitPrice;
    private int quantity;
}
