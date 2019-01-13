package tech.archdev.portfolio.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailService {

    private JavaMailSender javaMailSender;

    @Autowired
    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(String email, String text, String firstName, String lastName,
                          String company) throws MailException {

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo("etacalpha@gmail.com");
        mail.setFrom("arch.dev.email@gmail.com");
        mail.setSubject("Email from Portfolio Site");
        mail.setText(text + "\n" + "\n" + "\n" + firstName + " " + lastName +
                    "\n" + company + "\n" + email);

        javaMailSender.send(mail);
    }
}