package tech.archdev.portfolio.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.archdev.portfolio.services.EmailService;


@RestController
public class EmailResource {


        @Autowired
        private EmailService emailService;

        @RequestMapping("/email")
        public String sendEmail(){


            // send a notification
            try {
                emailService.sendNotification();
            }catch( Exception e ){
                // catch error
            }

            return "Thank you for contacting me.";
        }

    }

