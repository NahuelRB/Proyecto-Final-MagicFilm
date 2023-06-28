package com.backend.cinema.dto;

import com.backend.cinema.entity.Movie;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ScheduleDTOReq {

    private Movie movie;

    private LocalTime hour;

    private LocalDate emissionDate;

    private String hall;
}
