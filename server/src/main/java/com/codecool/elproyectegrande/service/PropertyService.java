package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.DTO.ReservationRequest;
import com.codecool.elproyectegrande.exception.ReservationConflictException;
import com.codecool.elproyectegrande.model.*;
import com.codecool.elproyectegrande.repository.CategoryRepository;
import com.codecool.elproyectegrande.repository.ClientRepository;
import com.codecool.elproyectegrande.repository.PropertyRepository;
import com.codecool.elproyectegrande.repository.ReviewRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
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
    private final ClientRepository clientRepository;

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

    public void updateRating(Property property) {
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

    public Reservation addReservation(Long propertyId, ReservationRequest reservationRequest) throws ReservationConflictException {
        Property property = getPropertyById(propertyId);
        Client client = clientRepository.findById(reservationRequest.getClientId()).orElse(null);
        Reservation newReservation = Reservation.builder()
                .property(property)
                .checkIn(reservationRequest.getReservation().getCheckIn())
                .checkOut(reservationRequest.getReservation().getCheckOut())
                .client(client)
                .build();
        return reservationService.createReservation(newReservation);
    }

    public List<Property> getPropertiesBySearchTerm(String searchTerm) {
        return getAllProperties().stream()
                .filter(property -> isPropertyMatch(property, searchTerm))
                .collect(Collectors.toList());
    }

    private boolean isPropertyMatch(Property property, String searchTerm) {
        if (searchTerm == null || searchTerm.isBlank()) {
            return false;
        }

        String lowerCaseSearchTerm = searchTerm.toLowerCase();
        Location location = property.getLocation();

        return (location != null &&
                (location.getCity().toLowerCase().contains(lowerCaseSearchTerm) ||
                        location.getCountry().toLowerCase().contains(lowerCaseSearchTerm))) ||
                (property.getName().toLowerCase().contains(lowerCaseSearchTerm));
    }

    public BigDecimal calculateReservationPriceForProperty(
            Long propertyId,
            LocalDate checkIn,
            LocalDate checkOut) {
        try {
            Property property = getPropertyById(propertyId);
            long numberOfNights = ChronoUnit.DAYS.between(checkIn, checkOut);
            BigDecimal totalPrice = property.getPricePerNight().multiply(BigDecimal.valueOf(numberOfNights));
            return totalPrice;
        } catch (Exception e) {
            throw new RuntimeException("Error calculating reservation price", e);
        }
    }


}
