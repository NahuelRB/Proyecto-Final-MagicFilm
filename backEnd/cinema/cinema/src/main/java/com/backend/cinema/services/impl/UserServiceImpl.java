package com.backend.cinema.services.impl;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.cinema.dto.UserDTO;
import com.backend.cinema.entity.User;
import com.backend.cinema.exception.ResourceNotFoundException;
import com.backend.cinema.repository.IUserRepository;
import com.backend.cinema.services.IUserService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class UserServiceImpl implements IUserService{

    private IUserRepository userRepository;

    @Autowired
    public UserServiceImpl(IUserRepository userRepository){
        this.userRepository = userRepository;
    }

	@Autowired
	ObjectMapper mapper;

	@Override
	public UserDTO getId(Long id) {
		Optional<User> userOptional = userRepository.findById(id);
		User user = userOptional.orElse(null);
		return mapper.convertValue(user,UserDTO.class);
	}

	public Set<UserDTO> getAll() throws ResourceNotFoundException {
		if(userRepository.findAll().isEmpty())
		throw new ResourceNotFoundException("No se encontraron usuarios");
		List<User> users = userRepository.findAll();
		Set<UserDTO> userDto = new HashSet<>();
		for(User user:users){
			userDto.add(mapper.convertValue(user, UserDTO.class));
		}
		return userDto;
	}

	public UserDTO save(UserDTO userDTO) {
		User user = mapper.convertValue(userDTO, User.class);
        User userMovie = userRepository.save(user);
        //Log
        return mapper.convertValue(userMovie, UserDTO.class);
	}

	@Override
	public void delete(Long id) {
		userRepository.deleteById(id);
        //Log
	}

	@Override
	public void update(UserDTO userDTO) {
		save(userDTO);
	} 

	public User login(String email, String password){
		Optional<User> userOptional = userRepository.findByEmailAndPassword(email, password);
		if(userOptional.isPresent()){
			return userOptional.get();
		}else{
			throw new IllegalArgumentException("Credenciales inválidas");
		}
	}

}
