package com.backend.cinema.repository;

import org.springframework.stereotype.Repository;

import com.backend.cinema.entity.Movie;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
@ComponentScan
public interface IMovieRepository extends JpaRepository<Movie,Long>{    
    Movie getById(Long id);
}
