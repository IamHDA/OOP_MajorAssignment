package com.group.backend.service;

import com.group.backend.dto.OrderDTO;

import java.util.List;

public interface OrderService {
    List<OrderDTO> getOrderByUser();
    List<OrderDTO> getAllOrders();
}
