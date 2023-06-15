	package com.backend.cinema.services.impl;

	import com.backend.cinema.dto.UserDTO;
	import com.backend.cinema.entity.User;
	import com.backend.cinema.exception.ResourceNotFoundException;
	import com.backend.cinema.repository.IUserRepository;
	import com.backend.cinema.security.TokenUtils;
	import com.backend.cinema.services.IUserService;
	import com.fasterxml.jackson.databind.ObjectMapper;
	import io.jsonwebtoken.Claims;
	import jakarta.persistence.EntityNotFoundException;
	import jakarta.transaction.Transactional;
	import org.apache.logging.log4j.LogManager;
	import org.apache.logging.log4j.Logger;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.dao.DataIntegrityViolationException;
	import org.springframework.stereotype.Service;

	import java.util.*;
	import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements IUserService {

	public static final Logger log = LogManager.getLogger(MovieServiceImpl.class);

	private IUserRepository userRepository;

	@Autowired
	public UserServiceImpl(IUserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Autowired
	ObjectMapper mapper;

	@Override
	public UserDTO getId(Long id) {
		Optional<User> userOptional = userRepository.findById(id);
		User user = userOptional.orElse(null);
		if (user == null) {
			log.error("User not found with ID: {}", id);
			throw new ResourceNotFoundException("Error retrieving user.");
		}
		log.info("User successfully retrieved with ID: {}", id);
		return mapper.convertValue(user, UserDTO.class);
	}

	public Set<UserDTO> getAll() throws ResourceNotFoundException {
		if (userRepository.findAll().isEmpty()) {
			log.info("No users found");
			throw new ResourceNotFoundException("No users found");
		} else {
			Set<UserDTO> userDto = new HashSet<>();
			List<User> users = userRepository.findAll();
			for (User user : users) {
				userDto.add(mapper.convertValue(user, UserDTO.class));
			}
			log.info("Users were found");
			return userDto.stream()
					.sorted(Comparator.comparing(UserDTO::getId))
					.collect(Collectors.toCollection(LinkedHashSet::new));
		}
	}

	public UserDTO save(UserDTO userDTO) {
		try {
			if (userDTO == null || userDTO.getEmail() == null || userDTO.getEmail().isEmpty()
					|| userDTO.getPassword() == null || userDTO.getPassword().isEmpty()) {
				throw new IllegalArgumentException("Email and password are required");
			}
			User user = mapper.convertValue(userDTO, User.class);
			User userMovie = userRepository.save(user);
			log.info("User saved successfully: {}", userDTO);
			return mapper.convertValue(userMovie, UserDTO.class);
		} catch (DataIntegrityViolationException ex) {
			String errorMessage = "An error ocurred while saving the user";
			System.out.println("Exception message: " + ex.getMessage());
		
			if(ex.getMessage().contains("Duplicate entry")){
				errorMessage = "The mail is alredy registered";
			}

				throw new IllegalArgumentException(errorMessage);
		}
	}

	@Override
	@Transactional
	public void delete(Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + id));
		userRepository.deleteById(id);
		log.info("User deleted successfully with ID: {}", id);
	}

	@Override
	public void update(UserDTO userDTO) {
		save(userDTO);
		log.info("User updated correctly: {}", userDTO.getEmail());
	}

	public boolean existsById(Long id) {
		return userRepository.existsById(id);
	}

	public User login(String email, String password) {
		Optional<User> userOptional = userRepository.findByEmailAndPassword(email, password);
		if (userOptional.isPresent()) {
			log.info("successfully logged in");
			return userOptional.get();
		} else {
			throw new IllegalArgumentException("Credenciales inválidas");
		}
	}

	public HashMap<String, Object> verifyEmail(String token) {
		Claims data = TokenUtils.decodeToken(token);
		if (data != null) {
			String email = data.getSubject();
			Optional<User> userFilter = userRepository.findOneByEmail(email);
			HashMap<String, Object> verifiedData = new HashMap<>();

			Date now = new Date();

			if (userFilter.isPresent()) {
				verifiedData.put("email", email);
				User user = userFilter.get();
				long diffInMillis = now.getTime() - user.getRegisterDate().getTime();
				long diffInHours = diffInMillis / (60 * 60 * 1000);
				if (diffInHours > 48 && user.getIsVerified().equals(Boolean.FALSE)) {
					user.setIsVerified(Boolean.TRUE);
					user = userRepository.save(user);
				}

				verifiedData.put("is_verified",user.getIsVerified());
				verifiedData.put("register_date", user.getRegisterDate());

			}
			return verifiedData;
		} else {
			throw new IllegalArgumentException("Token inválido o expirado");
		}
	}


}
