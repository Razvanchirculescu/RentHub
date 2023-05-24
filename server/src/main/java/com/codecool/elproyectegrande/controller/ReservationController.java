package com.codecool.elproyectegrande.controller;

import com.codecool.elproyectegrande.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("reservation")
@CrossOrigin(origins = "http://localhost:3000"
        , methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE
        , RequestMethod.POST, RequestMethod.PATCH})
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

}
