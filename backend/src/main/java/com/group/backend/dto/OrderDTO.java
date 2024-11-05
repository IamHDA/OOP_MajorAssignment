package com.group.backend.dto;

import lombok.Data;

@Data
public class OrderDTO {
    private long id;
    private long totalPrice;
    private String shippingAddress;
    private StatusDTO status;
    private PaymentMethodDTO paymentMethod;
}
