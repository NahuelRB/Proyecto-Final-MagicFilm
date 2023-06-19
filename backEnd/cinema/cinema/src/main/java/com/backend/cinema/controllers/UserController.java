package com.backend.cinema.controllers;

import com.backend.cinema.dto.UserDTO;
import com.backend.cinema.exception.ResourceNotFoundException;
import com.backend.cinema.services.impl.UserServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class UserController {

    public static final Logger log = LogManager.getLogger(UserServiceImpl.class);

    private UserServiceImpl userService;
    // private final EmailService emailService;

    @Value("${aws.secret.key}")
    private String awsSecretKey;

    @Value("${aws.access.key}")
    private String awsAccessKey;

    @Value("${aws.bucket.name}")
    private String awsBucketName;
    private final JavaMailSender mailSender;

    @Autowired
    public UserController(UserServiceImpl userService,JavaMailSender mailSender) {
        this.userService = userService;
        this.mailSender = mailSender;
    }

    @GetMapping("/send")
    public String sendEmail() {
        try{
        SimpleMailMessage message = new SimpleMailMessage();
        String to = "sistemastt8@gmail.com";
        String subject = "Envio de mail Equipo 5";
        String text = "Mail de prueba";
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
        return "Email sent successfully";
         } catch (Exception e) {
            return "Failed to send email: " + e.getMessage();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO) {
        try {
            String email = userDTO.getEmail();
            String password = userDTO.getPassword();
            userService.login(email, password);
            return ResponseEntity.ok("Inicio de sesión exitoso");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getId(@PathVariable Long id) {
        UserDTO UserDTO = userService.getId(id);
        return ResponseEntity.ok().body(UserDTO);
    }


    @GetMapping("/secrets")
    public ResponseEntity<?> getSecrets(HttpServletRequest request){
        String token = request.getHeader("Authorization");
        HashMap<String, String> verifiedData = new HashMap<>();
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7); // Eliminar el prefijo "Bearer "
            UserDTO user = userService.getUserFromToken(token);
            if (user.getRole().getName().equals("ADMIN")) {
                verifiedData.put("access", awsAccessKey);
                verifiedData.put("secret", awsSecretKey);
                verifiedData.put("name", awsBucketName);
            }
        }
        return ResponseEntity.ok().body(verifiedData);

    }

    @GetMapping()
    public ResponseEntity<Set<UserDTO>> getUsers() {
        Set<UserDTO> users = userService.getAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/verify-email/{token}")
    public ResponseEntity<?> verifyEmail(@PathVariable String token) {
        HashMap<String, Object> verifiedData = userService.verifyEmail(token);
        return ResponseEntity.ok().body(verifiedData);
    }

    @PostMapping()
    public ResponseEntity<UserDTO> save(@RequestBody UserDTO UserDTO) {
        UserDTO response = userService.save(UserDTO);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        try {

            if (!userService.existsById(id)) {
                log.warn("User not found with ID: {}", id);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            userService.delete(id);
            log.info("User deleted with ID: {}", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            log.warn("Invalid ID: {}", id);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping
    public void update(@RequestBody UserDTO UserDTO) {
        userService.update(UserDTO);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public String ProcessResourceNotFoundException(ResourceNotFoundException resourceNotFoundException) {
        return resourceNotFoundException.getMessage();
    }

}
