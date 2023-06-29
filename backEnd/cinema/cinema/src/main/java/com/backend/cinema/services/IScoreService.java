package com.backend.cinema.services;

import com.backend.cinema.dto.ScoreResponseDTO;
import com.backend.cinema.exception.ResourceNotFoundException;

import java.util.Set;

public interface IScoreService {
    Set<ScoreResponseDTO> getAll() throws ResourceNotFoundException;
    ScoreResponseDTO save(ScoreResponseDTO scoreResponseDTO);
}
