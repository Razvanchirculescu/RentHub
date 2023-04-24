package com.codecool.elproyectegrande.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class RentalUnit {

    @Id
    private int id;
    private int propertyId;

    @Enumerated(EnumType.ORDINAL)
    private RentalUnitType rentalUnitType;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "rental_unit", fetch = FetchType.LAZY)
    private List<Reservation> reservations;

    @ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;


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
