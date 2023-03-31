package com.codecool.elproyectegrande.model;

import jakarta.annotation.Resource;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Resource
public class Property {
    private int id;
    private final String name;
    private String description;
    private Location location;
    private BigDecimal pricePerNight;
    private double rating;
    private List<Category> categories;
    private List<Review> reviews;
    private List<Reservation> reservationList;
    private List<RentalUnit> rentalUnitList;

    public Property(int id, String name, String description, Location location, BigDecimal pricePerNight) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.pricePerNight = pricePerNight;
        categories = new ArrayList<>();
        reviews = new ArrayList<>();
        reservationList = new ArrayList<>();
        rentalUnitList = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void addCategory(Category category) {
        categories.add(category);
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Location getLocation() {
        return location;
    }

    public BigDecimal getPricePerNight() {
        return pricePerNight;
    }

    public void setPricePerNight(BigDecimal pricePerNight) {
        this.pricePerNight = pricePerNight;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public double getRating() {
        return rating;
    }

    public List<RentalUnit> getRentalUnitList() {
        return rentalUnitList;
    }

    public void setRating() {
        double sum = 0;
        for (Review review : reviews) {
            sum += review.getSatisfaction();
        }
        this.rating = Math.round((sum / reviews.size()) * 100.0) / 100.0;
    }

    public void addReview(Review review) {
        reviews.add(review);
        this.setRating();
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void addReservation(Reservation reservation) {
        this.reservationList.add(reservation);
    }

    public List<Reservation> getReservationList() {
        return reservationList;
    }

    public void addRentalUnit(RentalUnit rentalUnit){
        this.rentalUnitList.add(rentalUnit);
    }
}
