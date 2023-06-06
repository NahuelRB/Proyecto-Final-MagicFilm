package com.backend.cinema.repository;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Repository;

import com.backend.cinema.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@Repository
@ComponentScan
public interface IUserRepository extends JpaRepository<User,Long>{
    Optional<User> findOneByEmail(String email);

}
