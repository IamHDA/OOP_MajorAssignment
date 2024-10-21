package com.group.backend.controller;

import com.group.backend.dto.OrderDTO;
import com.group.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;
    @GetMapping("/orders")
    public ResponseEntity<List<OrderDTO>> getCurrentOrder(){
        return ResponseEntity.ok(orderService.getOrderByUser());
    }
}
