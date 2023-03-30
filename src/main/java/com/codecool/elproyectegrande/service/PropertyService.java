package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.Category;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.model.Review;
import com.codecool.elproyectegrande.utils.AddData;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

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

    public List<Property> getPropertiesByCategory(Category category) {
        List<Property> propertiesList = new ArrayList<>();
        for (Property property: properties) {
            for (Category category1: property.getCategories()) {
                if (category.equals(category1)) {
                    propertiesList.add(property);
                }
            }
        }
        return propertiesList;
    }

    public Property getPropertyById(int id) {
        return properties.stream()
                .filter(property -> id == property.getId())
                .findAny()
//                .findFirst()
                .orElse(null);
    }

    public void addReviewForProperty(int id, Review review) {
        Property property = getPropertyById(id);
        property.addReview(review);
    }

    public void addReservation(int id, Reservation reservation){
        Property property = getPropertyById(id);
        for (Reservation reservation1 :property.getReservationList()) {
            if (reservation1.equals(reservation)) {
                throw new IllegalArgumentException("Reservation already exists: "
                        + reservation);
            }
        }
        property.addReservation(reservation);
    }

    public void addCategory(int id, Category category){
        Property property = getPropertyById(id);
        for (Category category1: property.getCategories()) {
            if (category1.equals(category)) {
                throw new IllegalArgumentException("Category already exists: "
                        + category);
            }
        }
        property.addCategory(category);
    }

}
