package tech.archdev.portfolio.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tech.archdev.portfolio.domains.Email;
import tech.archdev.portfolio.services.EmailService;


@RestController
@CrossOrigin(origins = "*")
public class EmailResource {

    @Autowired
    EmailService emailService;

    @PostMapping("/api/email")
    public ResponseEntity<Email> createEmail(@RequestBody Email email) {
        System.out.println("Information has been received!!");
        emailService.sendEmail(email.getEmail(), email.getText(), email.getFirstName(), email.getLastName(),
                email.getCompany());
        return ResponseEntity.ok(email);
    }
}