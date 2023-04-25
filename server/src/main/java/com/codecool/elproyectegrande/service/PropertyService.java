package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.Category;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.RentalUnit;
import com.codecool.elproyectegrande.model.Review;
import com.codecool.elproyectegrande.repository.CategoryRepository;
import com.codecool.elproyectegrande.repository.PropertyRepository;
import com.codecool.elproyectegrande.repository.ReviewRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Component
@RequiredArgsConstructor
public class PropertyService {

    private final PropertyRepository propertyRepository;
    private final ReviewRepository reviewRepository;
    private final CategoryRepository categoryRepository;

    public void addProperty(Property property) {
        propertyRepository.save(property);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public List<Property> getPropertiesByCategory(String category) {
        Category category1 = categoryRepository.findByName(category);
        List<Property> propertiesList = new ArrayList<>();
        for (Property property : getAllProperties()) {
            for (Category category2 : property.getCategories()) {
                if (category2.equals(category1)) {
                    propertiesList.add(property);
                }
            }
        }
        return propertiesList;
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

//    public void addReservation(int propertyId, Reservation reservation) {
//        Property property = getPropertyById(propertyId);
//        RentalUnit rentalUnit = getRentalUnitById(propertyId, reservation.getRentalUnitID());
//        for (Reservation reservation1 : property.getReservationList()) {
//            if (reservation1.equals(reservation)) {
//                throw new IllegalArgumentException("Reservation already exists: "
//                        + reservation);
//            }
//        }
//        if(checkInValidationForRentalUnit(propertyId,reservation)){
//            property.addReservation(reservation);
//            rentalUnit.getReservations().add(reservation);
//        }
//    }

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

//    public boolean checkInValidationForRentalUnit(int propertyId, Reservation reservation){
//        RentalUnit rentalUnit = getRentalUnitById(propertyId, reservation.getRentalUnitID());
//
//        boolean available = true;
//
//        LocalDate today = LocalDate.now();
//        //start from tomorrow and out must be after in!
//        if (reservation.getCheckIn().isBefore(today)
//                || reservation.getCheckIn().isEqual(today)
//                || reservation.getCheckOut().isBefore(reservation.getCheckIn())
//                || reservation.getCheckOut().isEqual(reservation.getCheckIn())) {
//            throw new IllegalArgumentException("Check reservation dates! (1)  ");
//        }
//
//        if (rentalUnit!=null) {
//            List<Reservation> reservationsForRentalUnitID = rentalUnit.getReservations();
//            for (Reservation reservation1: reservationsForRentalUnitID){
//                if ((reservation.getCheckIn().isAfter(reservation1.getCheckIn())
//                        && reservation.getCheckIn().isBefore(reservation1.getCheckOut()))
//                        || (reservation.getCheckOut().isAfter(reservation1.getCheckIn())
//                        && reservation.getCheckOut().isBefore(reservation1.getCheckOut()))) {
//                    available = false;
//                    break;
//                    }
//                if ((reservation1.getCheckIn().isAfter(reservation.getCheckIn())
//                        && reservation1.getCheckIn().isBefore(reservation.getCheckOut()))
//                        ||(reservation1.getCheckOut().isAfter(reservation.getCheckIn())
//                        && reservation1.getCheckOut().isBefore(reservation.getCheckOut()))) {
//                    available=false;
//                    break;
//                }
//            }
//            if (!available) {
//                //data provided are in conflict with previous reservations
//                throw new IllegalArgumentException("Check reservation dates! (2)");
//            }
//        } else {
//            //the indicated rental unit does not exist
//            throw new IllegalArgumentException("Check reservation dates! (3)");
//        }
//        return available;
//    }

    public Property getPropertyById(Long propertyId) {
        return propertyRepository.findById(propertyId).orElseThrow(() -> new EntityNotFoundException("Property doesn't exist!"));
    }

    public RentalUnit getRentalUnitById(Long propertyId, int rentalUnitId){
        Property property = getPropertyById(propertyId);
        return property.getRentalUnits().stream()
                .filter(rentalUnit -> rentalUnitId==rentalUnit.getId())
                .findAny()
                .orElse(null);
    }

    public void addRentalUnit(RentalUnit rentalUnit){
        Property property = getPropertyById((long) rentalUnit.getProperty().getId());
        if (!property.getRentalUnits().contains(rentalUnit)) {
            property.getRentalUnits().add(rentalUnit);
        }
    }
}
