package com.codecool.elproyectegrande.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.time.LocalDate;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Reservation {

    private LocalDate checkIn;
    private LocalDate checkOut;
    private int nbOfRooms;

    public Reservation(LocalDate checkIn, LocalDate checkOut, int nbOfRooms) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.nbOfRooms = nbOfRooms;
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

    public int getNbOfRooms() {
        return nbOfRooms;
    }

    public void setNbOfRooms(int nbOfRooms) {
        this.nbOfRooms = nbOfRooms;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof Reservation other)) {
            return false;
        }
        return this.checkIn.equals(other.checkIn) && this.checkOut.equals(other.checkOut) && this.nbOfRooms==other.nbOfRooms;
    }

}
