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

        private String title;
        private LocalDate release_date;
        private String summary;
        private String trailer;
        private LocalDate finish_date;
    
        @ManyToOne
        @JoinColumn(name="category_id")
        private Category category;
        
        @ManyToOne
        @JoinColumn(name="gender_id")
        private Gender gender;
        
        @ManyToOne
        @JoinColumn(name="image_id")
        private Image image;
        
        @ManyToOne
        @JoinColumn(name="score_id")
        private Score score;
}
