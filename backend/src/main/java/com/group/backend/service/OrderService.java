package com.group.backend.service;

import com.group.backend.dto.ChangeOrderStatusDTO;
import com.group.backend.dto.OrderDTO;
import com.group.backend.entity.Order;

import java.util.List;

public interface OrderService {
    List<OrderDTO> getOrderByUser();
    Order getLastOrderByUser();
    Order createOrderFromCart(OrderDTO orderDTO);
    void deleteOrderUser();
    long getThisMonthRevenue();
    long countThisMonthOrder();
    String updateStatus(ChangeOrderStatusDTO changeOrderStatusDTO);

    List<OrderDTO> getAllOrders();
}
