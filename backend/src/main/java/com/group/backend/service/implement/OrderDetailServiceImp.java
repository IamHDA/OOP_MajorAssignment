package com.group.backend.service.implement;

import com.group.backend.dto.OrderDetailDTO;
import com.group.backend.entity.Order;
import com.group.backend.entity.Order_Detail;
import com.group.backend.entity.User;
import com.group.backend.repository.OrderDetailRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.OrderDetailService;
import com.group.backend.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderDetailServiceImp implements OrderDetailService {

    @Autowired
    private OrderDetailRepository orderDetailRepo;

    @Autowired
    private CurrentUser currentUser;

    @Autowired
    private OrderService orderService;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<OrderDetailDTO> getOrderDetailsByOrderId(long orderId) {
        List<OrderDetailDTO> thisOrderDetail = orderDetailRepo.findByOrderId(orderId).stream()
                .map(odetail -> modelMapper.map(odetail, OrderDetailDTO.class))
                .collect(Collectors.toList());
        return thisOrderDetail;
    }

    @Override
    public List<Order_Detail> addOrderDetailList(List<OrderDetailDTO> orderDetailDTO) {
        User user = currentUser.getCurrentUser();
        Order order = orderService.getlastOrderByUser(user);
        List<Order_Detail> orderDetailList =  orderDetailDTO.stream()
                .map(ordeDto -> {
                    Order_Detail res = modelMapper.map(orderDetailDTO, Order_Detail.class);
                    res.setOrder(order);
                    return res;
                })
                .collect(Collectors.toList());
        return orderDetailRepo.saveAll(orderDetailList);
        //        for(Order_Detail orderDetail : orderDetailList){
//            System.out.println(orderDetail.getUnitPrice() +" "+ orderDetail.getQuantity());
//        }
    }
}
