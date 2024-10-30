package com.group.backend.controller;


import com.group.backend.dto.CartDetailDTO;
import com.group.backend.entity.Cart_Detail;
import com.group.backend.service.CartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CartDetailController {
    @Autowired
    private CartDetailService cartDetailService;
    @GetMapping("/cart-detail")
    public List<CartDetailDTO> getCartDetailByUserId() {
        return cartDetailService.getCartDetailByUserId();
    }
}
