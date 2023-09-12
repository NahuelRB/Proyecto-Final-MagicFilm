package com.backend.cinema.repository;

import com.backend.cinema.entity.Schedule;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IScheduleRepository  extends JpaRepository<Schedule,Long> {
    Optional<List<Schedule>> getByMovieId(Long movie_id);
}
