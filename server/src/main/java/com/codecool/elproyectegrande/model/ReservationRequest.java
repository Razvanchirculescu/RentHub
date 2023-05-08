package com.codecool.elproyectegrande.model;

public class ReservationRequest {

    private Long rentalUnitId;
    private Reservation reservation;

    public ReservationRequest() {
    }

    public ReservationRequest(Long rentalUnitId, Reservation reservation) {
        this.rentalUnitId = rentalUnitId;
        this.reservation = reservation;
    }

    public Long getRentalUnitId() {
        return rentalUnitId;
    }

    public void setRentalUnitId(Long rentalUnitId) {
        this.rentalUnitId = rentalUnitId;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }
}
