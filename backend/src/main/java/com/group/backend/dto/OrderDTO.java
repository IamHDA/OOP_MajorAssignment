package com.group.backend.dto;

import com.group.backend.entity.Payment_Method;
import com.group.backend.entity.Status;
import lombok.Data;

@Data
public class OrderDTO {
    private long id;
    private long totalPrice;
    private Status status;
    private Payment_Method shippingMethod;
}
