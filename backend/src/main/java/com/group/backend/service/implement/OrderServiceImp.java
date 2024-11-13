package com.group.backend.service.implement;

import com.group.backend.dto.OrderDTO;
import com.group.backend.dto.StatusDTO;
import com.group.backend.entity.Order;
import com.group.backend.entity.Status;
import com.group.backend.entity.User;
import com.group.backend.repository.OrderRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.OrderService;
import com.group.backend.service.PaymentMethodService;
import com.group.backend.service.StatusService;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
    @Autowired
    private StatusService statusService;
    @Autowired
    private PaymentMethodService paymentMethodService;

    @Override
    public List<OrderDTO> getOrderByUser() {
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
        List<Order> orders = orderRepo.reverseSortedOrderByUser(user);
        for(Order order : orders){
            return order;
        }
        return null;
    }

    @Override
    public Order createOrderFromCart(OrderDTO orderDTO) {
        User user = currentUser.getCurrentUser();
        orderDTO.setStatus(statusService.getStatusById(1));
        orderDTO.setPaymentMethod(paymentMethodService.getPaymentMethodById(orderDTO.getStatus().getId()));
        Order order = modelMapper.map(orderDTO, Order.class);
        order.setUser(user);
        order.setOrderDate(LocalDate.now());
        return orderRepo.save(order);
    }

    @Transactional
    @Override
    public void deleteOrderUser() {
        User user = currentUser.getCurrentUser();
        orderRepo.deleteByUser(user);
    }

    @Override
    public long getThisMonthRevenue() {
        LocalDate today = LocalDate.now();
        return orderRepo.getThisMonthRevenue(today);
    }

    @Override
    public long countThisMonthOrder() {
        LocalDate today = LocalDate.now();
        return orderRepo.countThisMonthOrder(today);
    }

    @Override
    public String updateStatus(OrderDTO orderDTO) {
        Order order = orderRepo.findById(orderDTO.getId());
        StatusDTO statusDTO = statusService.getStatusById(orderDTO.getStatus().getId());
        order.setStatus(modelMapper.map(statusDTO, Status.class));
        orderRepo.save(order);
        return "Order status updated completed!";
    }
}
