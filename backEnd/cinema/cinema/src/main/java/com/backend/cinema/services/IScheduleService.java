package com.backend.cinema.services;

import com.backend.cinema.dto.ScheduleDTOReq;
import com.backend.cinema.entity.Schedule;

public interface IScheduleService {

    public Schedule save(ScheduleDTOReq scheduleDTOReq);
}
