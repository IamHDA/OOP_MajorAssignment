package com.group.backend.dto;

import lombok.Data;

@Data
public class OrderDTO {

    private long id;
    private String name;
    private long totalPrice;
    private long status;
}
