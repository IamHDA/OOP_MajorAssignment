package com.group.backend.service;

import com.group.backend.dto.OrderDetailDTO;

import java.util.List;

public interface OrderDetailService {
    List<OrderDetailDTO> getOrderDetailsByOrderId(long orderId);

//    OrderDetailDTO addOrderDetail(OrderDetailDTO orderDetailDTO);
}
