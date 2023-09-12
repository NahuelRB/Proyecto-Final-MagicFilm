package com.backend.cinema.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "schedule")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    private LocalTime hour;

    private LocalDate emissionDate;

    private String hall;

    @Column(columnDefinition = "bigint default 100")
    private Long chairsAvailable;
}
