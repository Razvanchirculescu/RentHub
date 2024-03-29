package com.codecool.elproyectegrande.controller;

import com.codecool.elproyectegrande.DTO.ReservationRequest;
import com.codecool.elproyectegrande.exception.ErrorResponse;
import com.codecool.elproyectegrande.exception.ReservationConflictException;
import com.codecool.elproyectegrande.model.Category;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@RestController
@RequestMapping("/properties")
public class PropertyController {
    private final PropertyService propertyService;


    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }


    @GetMapping("/{id}")
    public Property getPropertyDetails(@PathVariable Long id) {
        return propertyService.getPropertyById(id);
    }

    @PostMapping
    public void addProperty(@RequestBody Property property) {
        propertyService.addProperty(property);
    }


    @GetMapping(params = "category")
    public List<Property> getPropertiesByCategory(@RequestParam("category") String category) {
        return propertyService.getPropertiesByCategory(category);
    }


    @PatchMapping("/{propertyId}/category")
    public void addCategory(@PathVariable Long propertyId, @RequestBody Category category) {
        propertyService.addCategory(propertyId, category);
    }

    @PostMapping(value = "/{propertyId}/reservations", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addReservation(@PathVariable Long propertyId, @RequestBody ReservationRequest reservationRequest) {
        try {
            Reservation savedReservation = propertyService.addReservation(propertyId, reservationRequest);
            return ResponseEntity.ok(savedReservation);
        } catch (ReservationConflictException e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping(params = "search")
    public List<Property> getPropertiesBySearchTerm(@RequestParam("search") String searchTerm) {
        return propertyService.getPropertiesBySearchTerm(searchTerm);
    }

    @GetMapping("/{propertyId}/calculate-reservation-price")
    public ResponseEntity<BigDecimal> calculateReservationPrice(
            @PathVariable Long propertyId,
            @RequestParam("checkIn") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn,
            @RequestParam("checkOut") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut) {
        try {
            BigDecimal totalPrice = propertyService.calculateReservationPriceForProperty(propertyId, checkIn, checkOut);
            return ResponseEntity.ok(totalPrice);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
