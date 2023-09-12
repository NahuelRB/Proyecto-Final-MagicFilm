package com.backend.cinema.services.impl;

import com.backend.cinema.dto.BookingDTOReq;
import com.backend.cinema.dto.BookingDTOResp;
import com.backend.cinema.entity.Booking;
import com.backend.cinema.entity.Schedule;
import com.backend.cinema.repository.IBookingRepository;
import com.backend.cinema.repository.IScheduleRepository;
import com.backend.cinema.services.IBookingService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingServiceImpl implements IBookingService {

    public static final Logger log = LogManager.getLogger(MovieServiceImpl.class);

    private IBookingRepository bookingRepository;
    private IScheduleRepository scheduleRepository;



    @Autowired
    public BookingServiceImpl(IBookingRepository bookingRepository, IScheduleRepository scheduleRepository){
        this.bookingRepository = bookingRepository;
        this.scheduleRepository = scheduleRepository;
    }
    @Autowired
    ObjectMapper mapper;

    @Override
    public BookingDTOResp save(BookingDTOReq bookingDTOReq) {
        Booking booking = mapper.convertValue(bookingDTOReq, Booking.class);
        Booking savedBooking = bookingRepository.save(booking);
        log.info("Booking saved successfully: {}",savedBooking);
        BookingDTOResp bookingDTOResp = mapper.convertValue(savedBooking, BookingDTOResp.class);
        bookingDTOResp.setId_user(bookingDTOReq.getId_user());
        bookingDTOResp.setId_movie(bookingDTOReq.getId_movie());
        bookingDTOResp.setId_schedule(bookingDTOReq.getId_schedule());
        //Schedule schedule = scheduleRepository.getById(bookingDTOReq.getId_schedule());
        Schedule schedule = scheduleRepository.getReferenceById(bookingDTOReq.getId_schedule());
        schedule.setChairsAvailable(schedule.getChairsAvailable()-bookingDTOReq.getSeats());
        scheduleRepository.save(schedule);
        return bookingDTOResp;
    }
}
