package com.backend.cinema.entity;


import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table (name="movie")
@Setter
@Getter
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Movie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movie_id;

        private String name;
        private LocalDate release_date;
        private String summary;
        private String image;
        private String trailer;
        private LocalDate finish_date;


    //Ver relacion con la otra tabla mappedBy

}
