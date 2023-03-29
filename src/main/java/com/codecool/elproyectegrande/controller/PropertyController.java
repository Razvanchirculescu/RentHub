package com.codecool.elproyectegrande.controller;

import com.codecool.elproyectegrande.model.CategoryEx;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.Review;
import com.codecool.elproyectegrande.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@org.springframework.stereotype.Controller
public class PropertyController {

    private PropertyService propertyService;

    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping("/properties")
    @ResponseBody
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/property/{name}")
    @ResponseBody
    public Property getPropertyDetails(@PathVariable String name) {
        return propertyService.getPropertyByName(name);
    }

    @PostMapping("/property/add")
    @ResponseBody
    public void addProperty(@RequestBody Property property) {
        propertyService.addProperty(property);
    }

    @PostMapping("/property/{name}/reviews/add")
    @ResponseBody
    public void addPropertyReview(@PathVariable String name, @RequestBody Review review) {
        propertyService.addReviewForProperty(name, review);
    }

    @GetMapping("/properties/category")
    @ResponseBody
    public List<Property> getPropertiesByCategory(@RequestParam String cat) {
        return propertyService.getPropertiesByCategory(CategoryEx.valueOf(cat));
    }
}
