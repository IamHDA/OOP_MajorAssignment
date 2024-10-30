package com.group.backend.dto;

import com.group.backend.entity.Cart_Detail;
import com.group.backend.entity.Laptop;
import lombok.Data;

@Data
public class CartDetailDTO {
    private long id;
    private int quantity;
    private Laptop laptop;

}
