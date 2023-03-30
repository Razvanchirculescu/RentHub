package com.codecool.elproyectegrande.controller;

import com.codecool.elproyectegrande.model.Category;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.model.Review;
import com.codecool.elproyectegrande.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PropertyController {

    private PropertyService propertyService;

    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping("/properties")
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @PatchMapping("/properties/{id}")
    public Property getPropertyDetails(@PathVariable int id) {
        return propertyService.getPropertyById(id);
    }

    @PostMapping("/properties")
    public void addProperty(@RequestBody Property property) {
        propertyService.addProperty(property);
    }

    @PostMapping("/properties/{id}/reviews")
    public void addPropertyReview(@PathVariable int id, @RequestBody Review review) {
        propertyService.addReviewForProperty(id, review);
    }

    @PatchMapping ("/properties")
    public List<Property> getPropertiesByCategory(@RequestParam Category category) {
        return propertyService.getPropertiesByCategory(category);
    }

    @PostMapping("/property/{id}/reservation")
    public void addReservation(@PathVariable int id, @RequestBody Reservation reservation) {
        propertyService.addReservation(id, reservation);
    }

    @PostMapping("/property/{id}/category")
    public void addCategory(@PathVariable int id, @RequestBody Category category){
        propertyService.addCategory(id, category);
    }
}
