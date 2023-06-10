package com.backend.cinema.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.cinema.dto.UserDTO;
import com.backend.cinema.exception.ResourceNotFoundException;
import com.backend.cinema.services.impl.UserServiceImpl;

@RestController
@RequestMapping("/user")
public class UserController {
    
    private UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService){
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getId(@PathVariable Long id) throws ResourceNotFoundException{
        UserDTO UserDTO = userService.getId(id);
        return ResponseEntity.ok().body(UserDTO);
    }

    @GetMapping()
    public ResponseEntity<Set<UserDTO>> getMovies() throws ResourceNotFoundException{
        return new ResponseEntity<>(userService.getAll(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<UserDTO> save(@RequestBody UserDTO UserDTO){
        UserDTO response = userService.save(UserDTO);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        ResponseEntity response = null;
        if (id != 0) response = ResponseEntity.status(HttpStatus.OK).build();
        else response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        userService.delete(id);
        return response;
    }

    @PutMapping
    public void update(@RequestBody UserDTO UserDTO){
        userService.update(UserDTO); 
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public String ProcessResourceNotFoundException(ResourceNotFoundException resourceNotFoundException){
        return resourceNotFoundException.getMessage();
    }  

}
