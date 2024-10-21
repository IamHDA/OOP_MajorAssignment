package com.group.backend.service.implement;

import com.group.backend.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

@Service
public class EmailServiceImp implements EmailService {

    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;

    public EmailServiceImp(JavaMailSender mailSender, SpringTemplateEngine templateEngine) {
        this.mailSender = mailSender;
        this.templateEngine = templateEngine;
    }

    @Override
    public String sendEmail(String to) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        Context context = new Context();
        context.setVariable("subject", "Lấy lại mật khẩu tài khoản của bạn");
        context.setVariable("resetLink", "https://www.youtube.com/watch?v=Sst9O5C6WhQ");
        String process = templateEngine.process("Email_Content.html", context);

        helper.setTo(to);
        helper.setSubject("Lấy lại mật khẩu tài khoản của bạn");
        helper.setFrom("huaduyanhls1@gmail.com");
        helper.setText(process, true);

        mailSender.send(mimeMessage);
        return "Send mail successfully";
    }
}
