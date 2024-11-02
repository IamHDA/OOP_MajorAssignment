package com.group.backend.dto;

import com.group.backend.entity.Payment_Method;
import com.group.backend.entity.Status;
import com.group.backend.entity.User;
import lombok.Data;

@Data
public class OrderDTO {
    private long id;
    private long totalPrice;
    private User user;
    private Status status;
    private Payment_Method paymentMethod;
}
