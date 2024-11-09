package com.group.backend.controller;

import com.group.backend.dto.PasswordDTO;
import com.group.backend.service.PasswordResetService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/forgetPassword")
public class PasswordResetController {

    @Autowired
    private PasswordResetService passwordResetService;

    @GetMapping("/sendMail")
    public ResponseEntity<String> sendResetMail(@RequestBody String email) throws MessagingException {
        System.out.println(email);
        return ResponseEntity.ok(passwordResetService.sendResetMail(email));
    }

    @PostMapping("/resetPassword")
    public ResponseEntity<String> resetPassword(@RequestParam String email, @RequestBody PasswordDTO passwordDTO){
        return ResponseEntity.ok(passwordResetService.resetPassword(email, passwordDTO));
    }
}
