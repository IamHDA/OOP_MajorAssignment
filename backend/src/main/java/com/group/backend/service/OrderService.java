package com.group.backend.service;

import com.group.backend.dto.OrderDTO;
import com.group.backend.entity.Order;
import com.group.backend.entity.User;

import java.util.List;

public interface OrderService {
    List<OrderDTO> getOrderByUser();
    Order getLastOrderByUser();
    Order createOrderFromCart(OrderDTO orderDTO);
    void deleteOrderUser();

}
