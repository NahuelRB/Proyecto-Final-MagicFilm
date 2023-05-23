package com.backend.cinema.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.cinema.dto.MovieDTO;
import com.backend.cinema.entity.Movie;
import com.backend.cinema.exception.ResourceNotFoundException;
import com.backend.cinema.repository.IMovieRepository;
import com.backend.cinema.services.IMovieService;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;

@Service
public class MovieServiceImpl implements IMovieService{
    
    //public static final Logger log = LogManager.getLogger(MovieServiceImpl.class);
    
    private IMovieRepository movieRepository;

    @Autowired
    public MovieServiceImpl(IMovieRepository movieRepository){
        this.movieRepository = movieRepository;
    }

    @Autowired
    ObjectMapper mapper;

    public MovieDTO getId(Long id){
        Optional<Movie> movieOptional = movieRepository.findById(id);
        Movie movie = movieOptional.orElse(null);
        return mapper.convertValue(movie, MovieDTO.class);
    }

    @Override
    public Set<MovieDTO> getAll() throws ResourceNotFoundException{
        if(movieRepository.findAll().isEmpty())
            throw new ResourceNotFoundException("No se encontraron peliculas");
        List<Movie> movies = movieRepository.findAll();
        Set<MovieDTO> movieDto = new HashSet<>();
        for(Movie movie : movies){
            movieDto.add(mapper.convertValue(movie, MovieDTO.class));
         }
        return movieDto;
    }   

    public MovieDTO save(MovieDTO movieDTO){
        Movie movie = mapper.convertValue(movieDTO, Movie.class);
        Movie saveMovie = movieRepository.save(movie);
        //Log
        return mapper.convertValue(saveMovie, MovieDTO.class);
    }

    public void delete(Long id){
        movieRepository.deleteById(id);
        //Log
    }

    public void update(MovieDTO movieDTO){
        save(movieDTO);
    }

}
