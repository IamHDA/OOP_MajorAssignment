package com.group.backend.dto;

import lombok.Data;

@Data
public class OrderDTO {
    private long id;
    private String receiverName;
    private String receiverPhone;
    private String shippingAddress;
    private long totalPrice;
    private StatusDTO status;
    private PaymentMethodDTO paymentMethod;
}
