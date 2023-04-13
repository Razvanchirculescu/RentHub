package com.codecool.elproyectegrande.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public enum RentalUnitType {
    SINGLE("One bed"),
    DOUBLE("Two beds"),
    APARTMENT("Two rooms or more");

    private final String name;

    RentalUnitType(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
}
