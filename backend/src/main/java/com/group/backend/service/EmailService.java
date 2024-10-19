package com.group.backend.service;

public interface EmailService {
    String sendEmail(String to, String subject, String body);
}
