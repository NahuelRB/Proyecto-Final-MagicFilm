package com.backend.cinema.controllers;

import com.backend.cinema.dto.ScheduleDTOReq;
import com.backend.cinema.entity.Schedule;
import com.backend.cinema.services.impl.ScheduleServiceImpl;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/schedule")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class ScheduleController {

    public static final Logger log = LogManager.getLogger(ScheduleServiceImpl.class);
    private ScheduleServiceImpl scheduleService;

    @Autowired
    public ScheduleController(ScheduleServiceImpl scheduleService) {
        this.scheduleService = scheduleService;
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<?> getId(@PathVariable Long id) throws ResourceNotFoundException {
//        MovieDTO movie = scheduleService.getId(id);
//        if (movie == null) {
//            log.error("Movie not found with ID: {}", id);
//            throw new ResourceNotFoundException("Error retrieving movie.");
//        }
//        log.info("Movie successfully retrieved with ID: {}", id);
//        return ResponseEntity.ok().body(movie);
//    }

    @PostMapping()
    public ResponseEntity<Schedule> save(@RequestBody ScheduleDTOReq scheduleDTOReq) {
        log.info("Creating schedule:", scheduleDTOReq);
        Schedule response = scheduleService.save(scheduleDTOReq);
        return ResponseEntity.ok().body(response);
    }

}
