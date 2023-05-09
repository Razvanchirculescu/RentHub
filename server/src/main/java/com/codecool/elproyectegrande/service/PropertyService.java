package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.exception.ReservationConflictException;
import com.codecool.elproyectegrande.model.Category;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.RentalUnit;
import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.DTO.ReservationRequest;
import com.codecool.elproyectegrande.model.Review;
import com.codecool.elproyectegrande.repository.CategoryRepository;
import com.codecool.elproyectegrande.repository.PropertyRepository;
import com.codecool.elproyectegrande.repository.RentalUnitRepository;
import com.codecool.elproyectegrande.repository.ReviewRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private final RentalUnitRepository rentalUnitRepository;
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
        Property property = getPropertyById(id);
        if (review.getSatisfaction() < 1 || review.getSatisfaction() > 5) {
            throw new IllegalArgumentException("Rating must be between 1 and 5");
        }
        review.setProperty(property);
        property.addReview(review);
        property.setRating();
        reviewRepository.save(review);
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

    public void addRentalUnit(RentalUnit rentalUnit){
        Property property = getPropertyById(rentalUnit.getProperty().getId());
        if (!property.getRentalUnits().contains(rentalUnit)) {
            property.getRentalUnits().add(rentalUnit);
        }
    }

    public void addReservation(Long propertyId, ReservationRequest reservationRequest) {
        try {
            Property property = getPropertyById(propertyId);
            RentalUnit rentalUnit = rentalUnitRepository.findById(reservationRequest.getRentalUnitId()).orElse(null);
            Reservation newReservation = Reservation.builder().property(property)
                    .rentalUnit(rentalUnit)
                    .checkIn(reservationRequest.getReservation().getCheckIn())
                    .checkOut(reservationRequest.getReservation().getCheckOut()).build();
            Reservation savedReservation = reservationService.createReservation(newReservation);
            ResponseEntity.ok(savedReservation);
        } catch (ReservationConflictException e) {
            ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
