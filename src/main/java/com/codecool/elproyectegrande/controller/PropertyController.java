package com.codecool.elproyectegrande.controller;

import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.model.Review;
import com.codecool.elproyectegrande.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@org.springframework.stereotype.Controller
@Controller
public class PropertyController {

    private PropertyService propertyService;

    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @ResponseBody
    @GetMapping("/properties")
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @ResponseBody
    @GetMapping("/property/{name}")
    public Property getPropertyDetails(@PathVariable String name) {
        return propertyService.getPropertyByName(name);
    }

    @ResponseBody
    @PostMapping("/property/add")
    public void addProperty(@RequestBody Property property) {
        propertyService.addProperty(property);
    }

    @ResponseBody
    @PostMapping("/property/{name}/reviews/add")
    public void addPropertyReview(@PathVariable String name, @RequestBody Review review) {
        propertyService.addReviewForProperty(name, review);
    }

    @ResponseBody
    @PostMapping("/property/{name}/reservation/add")
    public void addReservation(@PathVariable String name, @RequestBody Reservation reservation) {
        propertyService.addReservation(name, reservation);
    }




}
