//package com.codecool.elproyectegrande.model;
//
//import com.fasterxml.jackson.annotation.JsonAutoDetect;
//import jakarta.persistence.Entity;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.time.LocalDate;
//
//@Entity
//@Getter
//@Setter
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
//public class Reservation {
//
//    @Id
//    private int id;
//    private int clientId;
//    private LocalDate checkIn;
//    private LocalDate checkOut;
//
//
//    @ManyToOne
//    @JoinColumn(name = "property_id")
//    private Property property;
//
//    @Override
//    public boolean equals(Object obj) {
//        if (obj == this) {
//            return true;
//        }
//        if (!(obj instanceof Reservation other)) {
//            return false;
//        }
//        return this.id==other.id
//                && this.clientId==other.clientId
//                && this.checkIn.equals(other.checkIn)
//                && this.checkOut.equals(other.checkOut)
//                && this.rentalUnitID==other.rentalUnitID;
//    }
//
//}
