package com.group.backend.controller;

import com.group.backend.service.EmailService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/sendMail")
    public String sendMail() throws MessagingException {
        return emailService.sendEmail("huaduyanhls12@gmail.com");
    }
}
