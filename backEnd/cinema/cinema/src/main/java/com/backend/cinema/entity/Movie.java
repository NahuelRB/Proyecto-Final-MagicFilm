package com.backend.cinema.entity;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
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
    private Long id;

    private String title;

    private LocalDate release_date;

    private String summary;

    private LocalDate finish_date;

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
    private List<TrailerImages> trailerImages = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "gender_id")
    private Gender gender;

    private String image;

    private boolean state;

    private String trailer;

    public void setTrailerImages(List<TrailerImages> trailerImages) {
        this.trailerImages = trailerImages;
        for (TrailerImages trailerImage: trailerImages ) {
            trailerImage.setMovie(this);
        }
    }
}
