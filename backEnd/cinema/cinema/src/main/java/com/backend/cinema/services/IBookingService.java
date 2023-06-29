package com.backend.cinema.services;

import com.backend.cinema.dto.BookingDTOReq;
import com.backend.cinema.dto.BookingDTOResp;

public interface IBookingService {
    BookingDTOResp save(BookingDTOReq bookingDTOReq);
}
