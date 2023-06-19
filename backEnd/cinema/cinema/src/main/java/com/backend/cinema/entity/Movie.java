package com.backend.cinema.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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

    @Lob
    @Column(columnDefinition = "text")
    private String summary;

    private LocalDate finish_date;

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
    private List<TrailerImages> trailer_images = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;


    private String gender;

    private String image;

    private Boolean state;

    private String trailer;

    public void setTrailer_images(List<TrailerImages> trailerImages) {
        this.trailer_images = trailerImages;
        for (TrailerImages trailerImage: trailerImages ) {
            trailerImage.setMovie(this);
        }
    }
}
