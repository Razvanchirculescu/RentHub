package com.codecool.elproyectegrande.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Location {
    private String street;
    private int streetNr;
    private String city;
    private String country;

    public Location(String street, int streetNr, String city, String country) {
        this.street = street;
        this.streetNr = streetNr;
        this.city = city;
        this.country = country;
    }
}
