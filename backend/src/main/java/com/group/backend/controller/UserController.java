package com.group.backend.controller;

import com.group.backend.dto.OrderDTO;
import com.group.backend.dto.UserDTO;
import com.group.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/info")
    public UserDTO showInformation(){
        return userService.getInformation();
    }

    @GetMapping("/orders")
    public List<OrderDTO> showOrders(){
        return userService.getCurrentOrders();
    }
}
