package com.group.backend.controller;

import com.group.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/sendMail")
    public String sendMail() {
        emailService.sendEmail("huaduyanh090@gmail.com", "This is test", "https://www.youtube.com/watch?v=BzGm2NtyfE4&t=172s");
        return "Send successfully";
    }
}
