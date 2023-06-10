package com.backend.cinema.services;

import java.util.Set;

import com.backend.cinema.dto.MovieDTO;
import com.backend.cinema.entity.Movie;
import com.backend.cinema.exception.ResourceNotFoundException;

public interface IMovieService{   
   Movie getId(Long id) throws ResourceNotFoundException;
   Set<MovieDTO> getAll() throws ResourceNotFoundException;
   MovieDTO save(MovieDTO movieDTO);
   void delete(Long id);
   void update(MovieDTO movieDTO);
}


