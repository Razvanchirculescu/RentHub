package com.codecool.elproyectegrande.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.time.LocalDate;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Reservation {

    private int id;
    private int clientId;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private int rentalUnitID;

//    private int propertyID;



    public Reservation(int id, int clientId, LocalDate checkIn, LocalDate checkOut, int rentalUnitId) {
        this.id = id;
        this.clientId = clientId;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.rentalUnitID= rentalUnitId;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getClientId() {
        return clientId;
    }

    public void setClientId(int clientId) {
        this.clientId = clientId;
    }

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(LocalDate checkOut) {
        this.checkOut = checkOut;
    }

    public int getRentalUnitID() {
        return rentalUnitID;
    }

    public void setRentalUnitID(int rentalUnitID) {
        this.rentalUnitID = rentalUnitID;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof Reservation other)) {
            return false;
        }
        return this.id==other.id
                && this.clientId==other.clientId
                && this.checkIn.equals(other.checkIn)
                && this.checkOut.equals(other.checkOut)
                && this.rentalUnitID==other.rentalUnitID;
    }

}
