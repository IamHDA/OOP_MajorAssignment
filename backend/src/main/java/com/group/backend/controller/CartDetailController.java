package com.group.backend.controller;

import com.group.backend.dto.CartDetailDTO;
import com.group.backend.entity.Cart_Detail;
import com.group.backend.service.CartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartDetailController {
    @Autowired
    private CartDetailService cartDetailService;


    @GetMapping("/cart-detail")
    public ResponseEntity<List<CartDetailDTO>> getCartDetailByUserId() {
        return ResponseEntity.ok(cartDetailService.getCartDetailByUserId());
    }


    @PostMapping("/addIntoCart")
    public ResponseEntity<Cart_Detail> addIntoCart(@RequestBody CartDetailDTO cartDetailDTO) {
        return ResponseEntity.ok(cartDetailService.addLaptopIntoCart(cartDetailDTO));
    }
}
