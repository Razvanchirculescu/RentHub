package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.Category;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.RentalUnit;
//import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.model.Review;
import com.codecool.elproyectegrande.repository.PropertyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@Component
@RequiredArgsConstructor
public class PropertyService {

    private final PropertyRepository propertyRepository;

    public void addProperty(Property property) {
        propertyRepository.save(property);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public List<Property> getPropertiesByCategory(Category category) {
        List<Property> propertiesList = new ArrayList<>();
        for (Property property : getAllProperties()) {
            for (Category category1 : property.getCategories()) {
                if (category.equals(category1)) {
                    propertiesList.add(property);
                }
            }
        }
        return propertiesList;
    }

    public Property getPropertyByName(String name) {
        return getAllProperties().stream()
                .filter(property -> name.equals(property.getName()))
                .findAny()
                .orElse(null);
    }

    public void addReviewForProperty(int id, Review review) {
        Property property = getPropertyById(id);
        if (review.getSatisfaction() < 1 || review.getSatisfaction() > 5) {
            throw new IllegalArgumentException("Rating must be between 1 and 5");
        }
        property.addReview(review);
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

    public void addCategory(int propertyId, Category category) {
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

    public Property getPropertyById(int propertyId) {
        return getAllProperties().stream()
                .filter(property -> propertyId==property.getId())
                .findAny()
                .orElse(null);
    }


    public RentalUnit getRentalUnitById(int propertyId, int rentalUnitId){
        Property property = getPropertyById(propertyId);
        return property.getRentalUnitList().stream()
                .filter(rentalUnit -> rentalUnitId==rentalUnit.getId())
                .findAny()
                .orElse(null);
    }

    public void addRentalUnit(RentalUnit rentalUnit){
        Property property = getPropertyById(rentalUnit.getPropertyId());
        if (!property.getRentalUnitList().contains(rentalUnit)) {
            property.getRentalUnitList().add(rentalUnit);
        }
    }

}
