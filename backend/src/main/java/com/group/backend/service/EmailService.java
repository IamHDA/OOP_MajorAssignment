package com.group.backend.service;

public interface EmailService {
    public String sendEmail(String to, String subject, String body);
}
