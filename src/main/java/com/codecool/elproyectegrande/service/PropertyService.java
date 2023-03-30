package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.CategoryEx;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.model.Review;
import com.codecool.elproyectegrande.utils.AddData;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@Component
public class PropertyService {
    private List<Property> properties;

    public PropertyService(){
        this.properties = new ArrayList<>();
        AddData.addData(properties);
    }

    public void addProperty(Property property) {
        properties.add(property);
    }

    public List<Property> getAllProperties() {
        return properties;
    }

    public List<Property> getPropertiesByCategory(CategoryEx category) {
        List<Property> propertiesList = new ArrayList<>();
        for (Property property: properties) {
            for (CategoryEx category1: property.getCategories()) {
                if (category.equals(category1)) {
                    propertiesList.add(property);
                }
            }
        }
        return propertiesList;
    }

    public Property getPropertyByName(String name) {
        return properties.stream()
                .filter(property -> name.equals(property.getName()))
                .findAny()
//                .findFirst()
                .orElse(null);
    }

    public void addReviewForProperty(String name, Review review) {
        Property property = getPropertyByName(name);
        property.addReview(review);
    }

    public void addReservation(String name, Reservation reservation){
        Property property = getPropertyByName(name);
        for (Reservation reservation1 :property.getReservationList()) {
            if (reservation1.equals(reservation)) {
                throw new IllegalArgumentException("Reservation already exists: "
                        + reservation);
            }
        }
        property.addReservation(reservation);
    }

    public void addCategory(String name, Category category){
        Property property = getPropertyByName(name);
        for (Category category1: property.getCategories()) {
            if (category1.equals(category)) {
                throw new IllegalArgumentException("Category already exists: "
                        + category);
            }
        }
        property.addCategory(category);
    }





}
