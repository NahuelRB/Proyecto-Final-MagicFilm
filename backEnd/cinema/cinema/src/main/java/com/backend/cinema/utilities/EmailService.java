package com.backend.cinema.utilities;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
 
    /*private final JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender){
        this.mailSender = mailSender;
    }
    
    public void sendEmail(SimpleMailMessage message){
        /*SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);*
        mailSender.send(message);
    }*/

   @Bean
   @ConfigurationProperties("spring.mail")
	public JavaMailSender javaMailSender() {
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		//mailSender.setHost("smtp.gmail.com");
		//mailSender.setPort(587);
		//mailSender.setUsername("magicfilmdh@gmail.com");
		//mailSender.setPassword("cfhrtcksozsqxyrg");

		// Configurar las propiedades del servidor de correo
		/*Properties props = mailSender.getJavaMailProperties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");

		// Deshabilitar la verificación del certificado
		props.put("mail.smtp.ssl.trust", "*");*/

		return mailSender;
	}

}
