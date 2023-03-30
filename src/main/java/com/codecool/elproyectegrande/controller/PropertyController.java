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

    @PatchMapping("/properties/{name}")
    public Property getPropertyDetails(@PathVariable String name) {
        return propertyService.getPropertyByName(name);
    }

    @PostMapping("/properties")
    public void addProperty(@RequestBody Property property) {
        propertyService.addProperty(property);
    }

    @PostMapping("/properties/{name}/reviews")
    public void addPropertyReview(@PathVariable String name, @RequestBody Review review) {
        propertyService.addReviewForProperty(name, review);
    }

    @PatchMapping ("/properties")
    public List<Property> getPropertiesByCategory(@RequestParam Category category) {
        return propertyService.getPropertiesByCategory(category);
    }

    @PostMapping("/property/{name}/reservation")
    public void addReservation(@PathVariable String name, @RequestBody Reservation reservation) {
        propertyService.addReservation(name, reservation);
    }

    @PostMapping("/property/{name}/category")
    public void addCategory(@PathVariable String name, @RequestBody Category category){
        propertyService.addCategory(name, category);
    }
}
