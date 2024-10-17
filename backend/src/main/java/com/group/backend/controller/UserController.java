package com.group.backend.controller;

import com.group.backend.dto.UserDTO;
import com.group.backend.entity.User;
import com.group.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/info")
    public ResponseEntity<UserDTO> showInformation(){
        return ResponseEntity.ok(userService.getInformation());
    }

    @PutMapping("/changeInfo")
    public ResponseEntity<UserDTO> changeInfo(@RequestBody UserDTO userDTO){
        return ResponseEntity.ok(userService.changeInfo(userDTO));
    }

    @PutMapping("/changePass")
    public ResponseEntity<UserDTO> changePass(@RequestBody UserDTO userDTO){
        return ResponseEntity.ok(userService.changeInfo(userDTO));
    }


}
