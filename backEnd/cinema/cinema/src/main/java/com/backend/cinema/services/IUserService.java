package com.backend.cinema.services;

import com.backend.cinema.dto.UserDTO;
import com.backend.cinema.exception.ResourceNotFoundException;

import java.util.HashMap;
import java.util.Set;

public interface IUserService {    
    UserDTO getId(Long id) throws ResourceNotFoundException;
    Set<UserDTO> getAll() throws ResourceNotFoundException;
    UserDTO save(UserDTO userDTO);
    void delete(Long id);
    void update(UserDTO userDTO);
    HashMap<String,Object> verifyEmail(String Token);
}
