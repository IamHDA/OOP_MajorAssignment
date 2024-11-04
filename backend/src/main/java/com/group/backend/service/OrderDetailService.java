package com.group.backend.service;

import com.group.backend.dto.OrderDetailDTO;
import com.group.backend.entity.Order_Detail;

import java.util.List;

public interface OrderDetailService {
    List<OrderDetailDTO> getOrderDetailsByOrderId(long orderId);

    List<Order_Detail> addOrderDetailList(List<OrderDetailDTO> orderDetailDTO);
}
