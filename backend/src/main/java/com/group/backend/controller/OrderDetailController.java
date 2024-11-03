package com.group.backend.controller;

import com.group.backend.dto.OrderDetailDTO;
import com.group.backend.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/orders/detail/{id}")
    public ResponseEntity<List<OrderDetailDTO>> getOrderDetailByOrderId(@PathVariable long id) {
        return ResponseEntity.ok(orderDetailService.getOrderDetailsByOrderId(id));
    }
//    @PostMapping("/orders/addOrderDetail")
//    public ResponseEntity<OrderDetailDTO> addOrderDetail(@RequestBody OrderDetailDTO orderDetailDTO) {
//        return ResponseEntity.ok(orderDetailService.addOrderDetail(orderDetailDTO));
//    }
}
