package com.backend.cinema.dto;

import com.backend.cinema.entity.TrailerImages;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieDTO extends MovieInfoDTO {

    private LocalDate release_date;
    private String summary;
    private LocalDate finish_date;
    private CategoryResponseDTO category;
    private String gender;
    private String image;
    private String trailer;
    private List<TrailerImages> trailer_images;
    private HashMap<String,List<ScheduleHourDTO>> schedules;
}
