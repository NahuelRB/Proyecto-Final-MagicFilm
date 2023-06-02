package com.backend.cinema.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "movie")
@Setter
@Getter
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movie_id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private LocalDate release_date;
    
    @Column(nullable = false)    
    private String summary;

    @Column(nullable = false)
    private String trailer;

    @Column(nullable = false)
    private LocalDate finish_date;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "gender_id")
    private Gender gender;

    @ManyToOne
    @JoinColumn(name = "image_id")
    private Image image;

    @ManyToOne
    @JoinColumn(name = "score_id")
    private Score score;
}
