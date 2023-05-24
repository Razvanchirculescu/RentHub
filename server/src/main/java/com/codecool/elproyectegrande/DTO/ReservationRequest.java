package com.codecool.elproyectegrande.DTO;

import com.codecool.elproyectegrande.model.Reservation;

public class ReservationRequest {

    private Long rentalUnitId;
    private Reservation reservation;

    public ReservationRequest(Long rentalUnitId, Reservation reservation) {
        this.rentalUnitId = rentalUnitId;
        this.reservation = reservation;
    }
    public Long getRentalUnitId() {
        return rentalUnitId;
    }

    public Reservation getReservation() {
        return reservation;
    }

}
