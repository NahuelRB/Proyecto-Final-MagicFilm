package com.backend.cinema.dto;

import java.time.LocalDate;
import java.util.List;

import com.backend.cinema.entity.Category;
import com.backend.cinema.entity.Gender;
import com.backend.cinema.entity.Score;
import com.backend.cinema.entity.TrailerImages;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieDTO {
    
    private Long movie_id;

    private String title;
    private LocalDate release_date;
    private String summary;
    private String trailer;
    private LocalDate finish_date;
    private Boolean state;

    private Category category;
    private Gender gender;
    private String image;
    private List<TrailerImages> trailerImages;
    private Score score;
    //Ver la relacion de la base de datos  para mappedby
}
