package com.backend.cinema.services;

import com.backend.cinema.dto.ScheduleDTOReq;
import com.backend.cinema.entity.Schedule;
import com.backend.cinema.exception.ResourceNotFoundException;

public interface IScheduleService {

    Schedule save(ScheduleDTOReq scheduleDTOReq);

    ScheduleDTOReq getId(Long id) throws ResourceNotFoundException;
}
