package com.codecool.elproyectegrande.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Review {
    private String description;
    private int satisfaction;


    public Review(String description, int satisfaction) {
        this.description = description;
        this.satisfaction = satisfaction;
    }
}
