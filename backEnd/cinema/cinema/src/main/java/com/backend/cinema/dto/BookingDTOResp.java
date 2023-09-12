package com.backend.cinema.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class BookingDTOResp {
    private Long id;
    private Long id_user;
    private Long id_movie;
    private Long id_schedule;
    private Long price;
    private Long Seats;
}
