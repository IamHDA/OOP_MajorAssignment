package com.group.backend.controller;

import com.group.backend.dto.OrderDTO;
import com.group.backend.entity.Order;
import com.group.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/getCurrentUserOrder")
    public ResponseEntity<List<OrderDTO>> getCurrentOrder(){
        return ResponseEntity.ok(orderService.getOrdersByUser());
    }

    @PostMapping("/createOrderFromCart")
    public ResponseEntity<Order> createOrderFromCart(@RequestBody OrderDTO orderDTO){
        return ResponseEntity.ok(orderService.createOrderFromCart(orderDTO));
    }

    @DeleteMapping("/deleteUserOrder")
    public ResponseEntity<Void> deleteOrderUser(){
        orderService.deleteOrderUser();
        return ResponseEntity.ok().build();
    }
}
