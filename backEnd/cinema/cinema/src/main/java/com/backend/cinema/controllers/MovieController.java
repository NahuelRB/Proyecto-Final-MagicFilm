package com.backend.cinema.controllers;
import java.util.Set;

import com.backend.cinema.entity.Movie;
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
    //public static final Logger log = LogManager.getLogger(MovieServiceImpl.class);
    private MovieServiceImpl movieService;

    @Autowired
    public MovieController(MovieServiceImpl movieService){
        this.movieService = movieService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getId(@PathVariable Long id) throws ResourceNotFoundException{
        Movie movieDTO = movieService.getId(id);
        return ResponseEntity.ok().body(movieDTO);
    }

    @GetMapping()
    public ResponseEntity<Set<MovieDTO>> getMovies() throws ResourceNotFoundException{
        return new ResponseEntity<>(movieService.getAll(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<MovieDTO> save(@RequestBody MovieDTO movieDTO){
        MovieDTO response = movieService.save(movieDTO);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        ResponseEntity response = null;
        if (id != 0) response = ResponseEntity.status(HttpStatus.OK).build();
        else response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        movieService.delete(id);
        return response;
    }

    @PutMapping
    public void update(@RequestBody MovieDTO movieDTO){
        movieService.update(movieDTO); 
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public String ProcessResourceNotFoundException(ResourceNotFoundException resourceNotFoundException){
        return resourceNotFoundException.getMessage();
    }  
}
