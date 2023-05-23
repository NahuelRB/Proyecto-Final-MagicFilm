package com.backend.cinema.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieDTO {
    
    private Long movie_id;

    private String name;
    private LocalDate release_date;
    private String summary;
    private String image;
    private String trailer;
    private LocalDate finish_date;

    //Ver la relacion de la base de datos  para mappedby

}
