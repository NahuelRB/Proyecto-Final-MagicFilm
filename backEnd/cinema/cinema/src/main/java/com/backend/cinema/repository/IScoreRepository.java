package com.backend.cinema.repository;

import com.backend.cinema.entity.Score;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@ComponentScan
public interface IScoreRepository  extends JpaRepository<Score,Long> {

    @Query("from Score s where s.user.id=?1 and s.movie.id=?2")
    Optional<Score> filter(Long user_id, Long movie_id);
}
