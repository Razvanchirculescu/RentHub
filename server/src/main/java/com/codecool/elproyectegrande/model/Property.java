package com.codecool.elproyectegrande.model;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.math.BigDecimal;
import java.util.List;

//ToDO - @ElementCollection
//Todo Pattern builder - pt obiecte , librarie lombok

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(columnDefinition="TEXT")
    private String description;

    @OneToOne
    private Location location;

    private BigDecimal pricePerNight;
    private double rating;

    @ManyToMany(fetch = FetchType.EAGER)
    @Fetch(FetchMode.JOIN)
    @JoinTable(
            name = "property_category",
            joinColumns = @JoinColumn(name = "property_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private List<Category> categories;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "property", fetch = FetchType.EAGER)
    private List<Review> reviews;

//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<Reservation> reservationList;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "property", fetch = FetchType.EAGER)
    private List<RentalUnit> rentalUnits;

    public void addCategory(Category category) {
        categories.add(category);
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

//    public void addReservation(Reservation reservation) {
//        this.reservationList.add(reservation);
//    }

    public void addRentalUnit(RentalUnit rentalUnit){
        this.rentalUnits.add(rentalUnit);
    }

}
