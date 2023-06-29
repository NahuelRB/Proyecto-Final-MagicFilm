package com.backend.cinema.controllers;

import com.backend.cinema.dto.ScoreFilterDTO;
import com.backend.cinema.dto.ScoreResponseDTO;
import com.backend.cinema.exception.ResourceNotFoundException;
import com.backend.cinema.services.impl.ScoreServiceImpl;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/score")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class ScoreController{
    public static final Logger log = LogManager.getLogger(ScoreServiceImpl.class);
    private final ScoreServiceImpl scoreService;

    @Autowired
    public ScoreController(ScoreServiceImpl scoreService) {
        this.scoreService = scoreService;
    }

    @GetMapping()
    public ResponseEntity<Set<ScoreResponseDTO>> getScores() throws ResourceNotFoundException {
        Set<ScoreResponseDTO> scores = scoreService.getAll();
        if (scores.isEmpty()) {
            log.warn("No categories found");
            throw new ResourceNotFoundException("No category found");
        }
        log.info("categories found: {}", scores);
        return new ResponseEntity<>(scores, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<ScoreResponseDTO> save(@RequestBody ScoreResponseDTO scoreDTO) {
        System.out.println("LLEGO AL EP");
        ScoreResponseDTO response = scoreService.save(scoreDTO);
        return ResponseEntity.ok().body(response);
    }


    @PostMapping("/filter")
    public ResponseEntity<?> filterScore(@RequestBody ScoreFilterDTO filterDTO) {
        Optional<ScoreResponseDTO> score = scoreService.filter(filterDTO);
        if (score.isPresent()) {
            log.warn("No categories found");
            return new ResponseEntity<>(score, HttpStatus.OK);
        }
        log.info("categories found: {}", score);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}
