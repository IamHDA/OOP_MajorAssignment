package com.group.backend.service;

import com.group.backend.dto.OrderDetailDTO;
import com.group.backend.entity.Order_Detail;

import java.util.List;

public interface OrderDetailService {
    List<OrderDetailDTO> getOrderDetailsByOrderId(long orderId);
<<<<<<< HEAD

    List<Order_Detail> addOrderDetailList(List<OrderDetailDTO> orderDetailDTO);
=======
    void addOrderDetail(List<OrderDetailDTO> orderDetails);
>>>>>>> 1113d0b863a94afa2ee2d3efa4041fca1fa60fc2
}
