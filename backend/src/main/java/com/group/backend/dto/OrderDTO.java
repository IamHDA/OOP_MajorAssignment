package com.group.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.group.backend.entity.Shipping_Method;
import com.group.backend.entity.Status;
import lombok.Data;

@Data
public class OrderDTO {
    private long id;
    private long totalPrice;
    private Status status;
    private Shipping_Method shippingMethod;
}
