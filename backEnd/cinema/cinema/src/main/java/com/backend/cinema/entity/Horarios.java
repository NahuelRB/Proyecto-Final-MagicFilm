package com.backend.cinema.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "horarios")
@Setter
@Getter
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Horarios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "movie_id")
    private Movie movie;

    private Time horario;

    private Date fecha_emision;

    private String sala;

    @ColumnDefault("100")
    private Long sillas_disponibles;

}
