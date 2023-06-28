package com.backend.cinema.services.impl;

import com.backend.cinema.dto.ScheduleDTOReq;
import com.backend.cinema.entity.Schedule;
import com.backend.cinema.repository.IScheduleRepository;
import com.backend.cinema.services.IScheduleService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScheduleServiceImpl implements IScheduleService {

    private IScheduleRepository scheduleRepository;

    @Autowired
    ObjectMapper mapper;


    @Autowired
    public ScheduleServiceImpl( IScheduleRepository scheduleRepository){
        this.scheduleRepository = scheduleRepository;
    }


    @Override
    public Schedule save(ScheduleDTOReq scheduleDTOReq) {
        Schedule schedule = mapper.convertValue(scheduleDTOReq, Schedule.class);
        System.out.println("schedule "+schedule.getId() +"schedule hall"+schedule.getHall() +"schedule movie id "+schedule.getMovie().getId() +"schedule hora"+schedule.getHour() +"schedule fecha emision "+schedule.getEmissionDate() );
        Schedule schedule2= scheduleRepository.save(schedule);
        System.out.println("schedule2 = " + schedule2);
        return schedule2;
    }
}
