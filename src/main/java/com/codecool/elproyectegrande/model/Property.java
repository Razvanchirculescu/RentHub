package com.codecool.elproyectegrande.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Resource
public class Property {
    private final String name;
    private String description;
    private final Map<String, String> location = new HashMap<>();
    private BigDecimal pricePerNight;
    private double rating;
    private List<CategoryEx> categories;
    private List<Review> reviews;
    private List<Reservation> reservationList;


    public Property(String name, String description, String town, String country, BigDecimal pricePerNight) {
        this.name = name;
        this.description = description;
        this.location.put(country, town);
        this.pricePerNight = pricePerNight;
        categories = new ArrayList<>();
        reviews = new ArrayList<>();
        reservationList = new ArrayList<>();
    }

    public void addCategory(CategoryEx categoryEx) {
        categories.add(categoryEx);
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Map<String, String> getLocation() {
        return location;
    }

    public BigDecimal getPricePerNight() {
        return pricePerNight;
    }

    public List<CategoryEx> getCategories() {
        return categories;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPricePerNight(BigDecimal pricePerNight) {
        this.pricePerNight = pricePerNight;
    }

    public double getRating() {
        return rating;
    }

    public void setRating() {
        double sum = 0;
        for(Review review: reviews) {
            sum += review.getSatisfaction();
        }
        this.rating =  Math.round((sum/reviews.size()) * 100.0) / 100.0;
    }

    public void addReview(Review review) {
        reviews.add(review);
        this.setRating();
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void addReservation(Reservation reservation){
        this.reservationList.add(reservation);
    }

    public List<Reservation> getReservationList(){
        return  reservationList;
    }
}
