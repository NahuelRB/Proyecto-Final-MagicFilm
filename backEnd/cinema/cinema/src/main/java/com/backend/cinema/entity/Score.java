package com.backend.cinema.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.mapping.Join;

@Entity
@Table(name = "score")
@Setter
@Getter
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int score;

    @OneToOne
    @JoinColumn(name="id")
    private User user;

    @OneToOne
    @JoinColumn(name="id")
    private Movie movie;
}
