package com.backend.cinema.controllers;

import com.backend.cinema.dto.BookingDTOReq;
import com.backend.cinema.dto.BookingDTOResp;
import com.backend.cinema.services.impl.BookingServiceImpl;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class BookingController {


    public static final Logger log = LogManager.getLogger(BookingServiceImpl.class);
    private BookingServiceImpl bookingService;

    @Autowired
    public BookingController(BookingServiceImpl bookingService) {
        this.bookingService = bookingService;
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<?> getId(@PathVariable Long id) throws ResourceNotFoundException {
//        ScheduleDTOReq movie = bookingService.getId(id);
//        //System.out.println("movie = " + movie);
//        if (movie == null) {
//            log.error("Movie not found with ID: {}", id);
//            throw new ResourceNotFoundException("Error retrieving movie.");
//        }
//        log.info("Movie successfully retrieved with ID: {}", id);
//        return ResponseEntity.ok().body(movie);
//    }

    @PostMapping()
    public ResponseEntity<BookingDTOResp> save(@RequestBody BookingDTOReq bookingDTOReq) {
        log.info("Creating booking: ", bookingDTOReq);
        BookingDTOResp response = bookingService.save(bookingDTOReq);
        return ResponseEntity.ok().body(response);
    }
}
