package com.group.backend.controller;

import com.group.backend.dto.PasswordDTO;
import com.group.backend.dto.UserDTO;
import com.group.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/info")
    public ResponseEntity<UserDTO> showInformation(){
        return ResponseEntity.ok(userService.getInformation());
    }

    @PutMapping("/user/changeInfo")
    public ResponseEntity<UserDTO> changeInfo(@RequestBody UserDTO userDTO){
        return ResponseEntity.ok(userService.changeInfo(userDTO));
    }

    @PutMapping("/user/changePass")
    public ResponseEntity<PasswordDTO> changePass(@RequestBody PasswordDTO passwordDTO){
        return ResponseEntity.ok(userService.changePass(passwordDTO));
    }


}
