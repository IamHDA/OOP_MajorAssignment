package com.group.backend.service.implement;

import com.group.backend.dto.OrderDTO;
import com.group.backend.entity.Order;
import com.group.backend.entity.User;
import com.group.backend.repository.OrderRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.OrderService;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImp implements OrderService {
    @Autowired
    private CurrentUser currentUser;

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<OrderDTO> getOrdersByUser() {
        User thisUser = currentUser.getCurrentUser();
        List<Order> orders = orderRepo.findByUserId(thisUser.getId());
        List<OrderDTO> thisUserOrderDTO = orders.stream()
                .map(order -> modelMapper.map(order, OrderDTO.class))
                .collect(Collectors.toList());
        return thisUserOrderDTO;
    }

    @Override
    public Order getLastOrderByUser() {
        User user = currentUser.getCurrentUser();
        List<Order> orders = orderRepo.getLastOrderByUser(user);
        for(Order order : orders){
            return order;
        }
        return null;
    }

    @Override
    public Order createOrderFromCart(OrderDTO orderDTO) {
        User user = currentUser.getCurrentUser();
        Order order = modelMapper.map(orderDTO, Order.class);
        order.setUser(user);
        return orderRepo.save(order);
    }

    @Transactional
    @Override
    public void deleteOrderUser() {
        User user = currentUser.getCurrentUser();
        orderRepo.deleteByUser(user);
    }
}
