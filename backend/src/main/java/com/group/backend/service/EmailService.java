package com.group.backend.service;

import jakarta.mail.MessagingException;

public interface EmailService {
    String sendEmail(String to) throws MessagingException;
}
