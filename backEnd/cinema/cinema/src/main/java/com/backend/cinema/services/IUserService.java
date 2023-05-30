package com.backend.cinema.services;

import java.util.Set;

import com.backend.cinema.dto.UserDTO;
import com.backend.cinema.exception.ResourceNotFoundException;

public interface IUserService {
    
    UserDTO getId(Long id) throws ResourceNotFoundException;
    Set<UserDTO> getAll() throws ResourceNotFoundException;
    UserDTO save(UserDTO userDTO);
    void delete(Long id);
    void update(UserDTO userDTO);
}
