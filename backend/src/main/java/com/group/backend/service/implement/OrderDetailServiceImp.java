package com.group.backend.service.implement;

import com.group.backend.dto.OrderDTO;
import com.group.backend.dto.OrderDetailDTO;
import com.group.backend.entity.User;
import com.group.backend.repository.OrderDetailRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.OrderDetailService;
import com.group.backend.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderDetailServiceImp implements OrderDetailService {

    @Autowired
    private OrderDetailRepository orderDetailRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<OrderDetailDTO> getOrderDetailsByOrderId(long orderId) {
        List<OrderDetailDTO> thisOrderDetail = orderDetailRepo.findByOrderId(orderId).stream()
                .map(odetail -> modelMapper.map(odetail, OrderDetailDTO.class))
                .collect(Collectors.toList());
        return thisOrderDetail;
    }
}
