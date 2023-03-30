package com.codecool.elproyectegrande.model;

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
