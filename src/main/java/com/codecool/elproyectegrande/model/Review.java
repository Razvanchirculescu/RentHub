package com.codecool.elproyectegrande.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Review {
    private String description;
    private int satisfaction;

    public Review(String description, int satisfaction) {
        this.description = description;
        this.satisfaction = satisfaction;
    }
}
