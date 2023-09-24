package com.codecool.elproyectegrande.controller;

import com.codecool.elproyectegrande.exception.ReservationConflictException;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.service.PropertyService;
import com.codecool.elproyectegrande.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping("/reservations")
public class ReservationController {
    private final ReservationService reservationService;
    private final PropertyService propertyService;

    @Autowired
    public ReservationController(ReservationService reservationService, PropertyService propertyService) {
        this.reservationService = reservationService;
        this.propertyService = propertyService;
    }

    @GetMapping("/validate")
    public ResponseEntity<Boolean> validateReservation(
            @RequestParam("propertyId") Long propertyId,
            @RequestParam("checkIn") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn,
            @RequestParam("checkOut") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut) {
        try {
            // Retrieve the Property from your repository or service based on propertyId
            Property property = propertyService.getPropertyById(propertyId);

            // Create a Reservation object for validation
            Reservation reservationToValidate = new Reservation();
            reservationToValidate.setProperty(property);
            reservationToValidate.setCheckIn(checkIn);
            reservationToValidate.setCheckOut(checkOut);

            reservationService.validateReservation(reservationToValidate);

            return ResponseEntity.ok(true);
        } catch (ReservationConflictException e) {
            return ResponseEntity.ok(false);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
