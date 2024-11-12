package com.group.backend.controller;

import com.group.backend.dto.OrderDTO;
import com.group.backend.entity.Order;
import com.group.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/getCurrentUserOrder")
    public ResponseEntity<List<OrderDTO>> getCurrentOrder(){
        return ResponseEntity.ok(orderService.getOrderByUser());
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

    // API cap nhat trang thai don hang

    @PutMapping("/admin/updateOrderStatus")
    @PreAuthorize("hasAuthority('Admin')")
    public ResponseEntity<String> updateOrderStatus(@RequestBody OrderDTO orderDTO){
        return ResponseEntity.ok(orderService.updateStatus(orderDTO));
    }
}
