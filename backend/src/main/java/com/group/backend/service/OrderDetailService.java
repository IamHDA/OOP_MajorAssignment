package com.group.backend.service;

import com.group.backend.dto.OrderDetailDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderDetailService {
    List<OrderDetailDTO> getOrderDetailsByOrderId(long orderId);
}
