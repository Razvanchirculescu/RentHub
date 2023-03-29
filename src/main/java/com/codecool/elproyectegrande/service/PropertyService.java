package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.Category;
import com.codecool.elproyectegrande.model.Property;
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
}
