package com.codecool.elproyectegrande.repository;

import com.codecool.elproyectegrande.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
