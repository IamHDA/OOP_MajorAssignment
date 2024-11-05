package com.group.backend.service;

import com.group.backend.dto.OrderDTO;
import com.group.backend.entity.Order;

import java.util.List;

public interface OrderService {
    List<OrderDTO> getOrdersByUser();
    OrderDTO getLastOrderByUser();
    Order createOrderFromCart(OrderDTO orderDTO);
    void deleteOrderUser();
}
