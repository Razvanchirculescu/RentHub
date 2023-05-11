package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.exception.ReservationConflictException;
import com.codecool.elproyectegrande.model.Category;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.model.Review;
import com.codecool.elproyectegrande.repository.CategoryRepository;
import com.codecool.elproyectegrande.repository.PropertyRepository;
import com.codecool.elproyectegrande.repository.ReviewRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Component
@RequiredArgsConstructor
public class PropertyService {

    private final PropertyRepository propertyRepository;
    private final ReviewRepository reviewRepository;
    private final CategoryRepository categoryRepository;
    private final ReservationService reservationService;

    public void addProperty(Property property) {
        propertyRepository.save(property);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public List<Property> getPropertiesByCategory(String category) {
        Category category1 = categoryRepository.findByName(category);
        return getAllProperties().stream().filter(property ->
                property.getCategories().contains(category1)).collect(Collectors.toList());
    }

    public void addReviewForProperty(Long id, Review review) {
        Property property = propertyRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Property not found with id: " + id));
        review.setProperty(property);
        reviewRepository.save(review);

        property.setRating();
        propertyRepository.save(property);
    }

    public void addCategory(Long propertyId, Category category) {
        Property property = getPropertyById(propertyId);
        for (Category category1 : property.getCategories()) {
            if (category1.equals(category)) {
                throw new IllegalArgumentException("Category already exists: "
                        + category);
            }
        }
        property.addCategory(category);
    }

    public Property getPropertyById(Long propertyId) {
        return propertyRepository.findById(propertyId).orElseThrow(() -> new EntityNotFoundException("Property doesn't exist!"));
    }

    public Reservation addReservation(Long propertyId, Reservation reservation) throws ReservationConflictException {
        Property property = getPropertyById(propertyId);
        Reservation newReservation = Reservation.builder()
                .property(property)
                .checkIn(reservation.getCheckIn())
                .checkOut(reservation.getCheckOut())
                .build();
        return reservationService.createReservation(newReservation);
    }

}
