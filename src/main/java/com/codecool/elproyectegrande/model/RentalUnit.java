package com.codecool.elproyectegrande.model;

import java.util.ArrayList;
import java.util.List;

public class RentalUnit {
    private int id;
    private int propertyId;
    private List<Reservation> reservations;
    private RentalUnitType rentalUnitType;


    public RentalUnit(int id, int propertyId, RentalUnitType rentalUnitType) {
        this.id = id;
        this.propertyId = propertyId;
        this.rentalUnitType = rentalUnitType;
        this.reservations = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(int propertyId) {
        this.propertyId = propertyId;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public RentalUnitType getRentalUnitType() {
        return rentalUnitType;
    }

    public void setRentalUnitType(RentalUnitType rentalUnitType) {
        this.rentalUnitType = rentalUnitType;
    }
}
