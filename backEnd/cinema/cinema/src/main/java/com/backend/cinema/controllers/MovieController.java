package com.backend.cinema.controllers;

import java.util.Set;

import com.backend.cinema.entity.Movie;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.cinema.dto.MovieDTO;
import com.backend.cinema.exception.ResourceNotFoundException;
import com.backend.cinema.services.impl.MovieServiceImpl;

@RestController
@RequestMapping("/movie")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class MovieController{
    public static final Logger log = LogManager.getLogger(MovieServiceImpl.class);
    private MovieServiceImpl movieService;

    @Autowired
    public MovieController(MovieServiceImpl movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getId(@PathVariable Long id) throws ResourceNotFoundException {
        MovieDTO movieDTO = movieService.getId(id);
        if (movieDTO == null) {
            log.error("Movie not found with ID: {}", id);
            throw new ResourceNotFoundException("Error retrieving movie.");
        }
        log.info("Movie successfully retrieved with ID: {}", id);
        return ResponseEntity.ok().body(movieDTO);
    }

    @GetMapping()
    public ResponseEntity<Set<MovieDTO>> getMovies() throws ResourceNotFoundException {
        Set<MovieDTO> movies = movieService.getAll();
        if (movies.isEmpty()) {
            log.warn("No movies found");
            throw new ResourceNotFoundException("No movie found");
        }
        log.info("Movies found: {}", movies);
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<MovieDTO> save(@RequestBody MovieDTO movieDTO) {
        log.info("Creating user:", movieDTO);
        MovieDTO response = movieService.save(movieDTO);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            if (!movieService.existsById(id)) {
                log.warn("Movie not found with ID: {}", id);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            movieService.delete(id);
            log.info("Movie deleted with ID: {}", id);
            return ResponseEntity.status(HttpStatus.OK).build();
       } catch (IllegalArgumentException e) {
            log.warn("Invalid ID: {}", id);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping
    public ResponseEntity<MovieDTO> update(@PathVariable Long id, @RequestBody MovieDTO movieDTO){
        MovieDTO movie = movieService.save(movieDTO);
        return new ResponseEntity<>(movie, HttpStatus.OK);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public String ProcessResourceNotFoundException(ResourceNotFoundException resourceNotFoundException) {
        return resourceNotFoundException.getMessage();
    }
}
