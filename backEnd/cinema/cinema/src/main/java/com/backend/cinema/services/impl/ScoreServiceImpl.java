package com.backend.cinema.services.impl;

import com.backend.cinema.dto.ScoreFilterDTO;
import com.backend.cinema.dto.ScoreResponseDTO;
import com.backend.cinema.entity.Movie;
import com.backend.cinema.entity.Score;
import com.backend.cinema.entity.User;
import com.backend.cinema.exception.ResourceNotFoundException;
import com.backend.cinema.repository.IMovieRepository;
import com.backend.cinema.repository.IScoreRepository;
import com.backend.cinema.repository.IUserRepository;
import com.backend.cinema.services.IScoreService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class ScoreServiceImpl implements IScoreService {
    public static final Logger log = LogManager.getLogger(ScoreServiceImpl.class);


    private final IScoreRepository scoreRepository;
    private final IUserRepository userRepository;
    private final IMovieRepository movieRepository;


    @Autowired
    public ScoreServiceImpl(IUserRepository userRepository, IScoreRepository scoreRepository, IMovieRepository movieRepository) {
        this.userRepository = userRepository;
        this.scoreRepository = scoreRepository;
        this.movieRepository= movieRepository;

    }

    @Autowired
    ObjectMapper mapper;


    public Set<ScoreResponseDTO> getAll() throws ResourceNotFoundException {
        if (scoreRepository.findAll().isEmpty()) {
            log.info("No scores found");
            throw new ResourceNotFoundException("No scores found");
        } else {
            Set<ScoreResponseDTO> scoresDto = new HashSet<>();
            List<Score> scores = scoreRepository.findAll();
            System.out.println("scores = " + scores);
            for (Score score : scores) {
                ScoreResponseDTO scoreDto=mapper.convertValue(score, ScoreResponseDTO.class);
                scoreDto.setMovie_id(score.getMovie().getId());
                scoreDto.setUser_id(score.getUser().getId());
                scoresDto.add(scoreDto);
            }
            log.info("Scores were found");
            return scoresDto.stream()
                    .sorted(Comparator.comparing(ScoreResponseDTO::getId))
                    .collect(Collectors.toCollection(LinkedHashSet::new));
        }
    }


    public ScoreResponseDTO save(ScoreResponseDTO scoreDTO){
        System.out.println("ScoreDTO");
        Optional<Score> score_old = scoreRepository.filter(scoreDTO.getUser_id(), scoreDTO.getMovie_id());
        System.out.println("score_old");
        Score score;
        Movie movie=movieRepository.getById(scoreDTO.getMovie_id());
        User user= userRepository.getById(scoreDTO.getUser_id());
        if (score_old.isPresent()){
            System.out.println("Score Existente");
            score = score_old.get();
            score.setScore(scoreDTO.getScore());
        } else {
            System.out.println("Score Nuevo");
            score = mapper.convertValue(scoreDTO, Score.class);
            score.setUser(user);
            score.setMovie(movie);
        }
        Score saveScore = scoreRepository.save(score);
        movie.updateAverageScore();
        log.info("Movie saved successfully: {}", saveScore);
        ScoreResponseDTO response = mapper.convertValue(saveScore, ScoreResponseDTO.class);
        response.setMovie_id(movie.getId());
        response.setUser_id(user.getId());
        return response;
    }

    public Optional<ScoreResponseDTO> filter(ScoreFilterDTO scoreFilterDTO) {
        Optional<Score> scoreFilter = scoreRepository.filter(scoreFilterDTO.getUser_id(), scoreFilterDTO.getMovie_id());
        ScoreResponseDTO response = null;
        if (scoreFilter.isPresent()) {
            response = new ScoreResponseDTO();
            Score score = scoreFilter.get();
            response.setMovie_id(score.getMovie().getId());
            response.setScore(score.getScore());
            response.setUser_id(score.getUser().getId());
            response.setId(score.getId());
        }

        return Optional.ofNullable(response);
    }


}