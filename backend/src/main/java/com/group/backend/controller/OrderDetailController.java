package com.group.backend.controller;

import com.group.backend.dto.OrderDetailDTO;
import com.group.backend.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order-detail")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/{id}")
    public ResponseEntity<List<OrderDetailDTO>> getOrderDetailByOrderId(@PathVariable long id) {
        return ResponseEntity.ok(orderDetailService.getOrderDetailsByOrderId(id));
    }
    @PostMapping("/add")
    public ResponseEntity<Void> addOrderDetail(@RequestBody List<OrderDetailDTO> orderDetailsDTO) {
        orderDetailService.addOrderDetail(orderDetailsDTO);
        return ResponseEntity.ok().build();
    }
}
