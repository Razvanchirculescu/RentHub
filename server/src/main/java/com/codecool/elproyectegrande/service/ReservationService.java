package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.exception.ReservationConflictException;
import com.codecool.elproyectegrande.model.Reservation;
import com.codecool.elproyectegrande.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Component
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;

    public Reservation createReservation(Reservation reservation) throws ReservationConflictException {
        List<Reservation> overlappingReservations = reservationRepository
                .findByPropertyIdAndRentalUnitIdAndCheckInBeforeAndCheckOutAfter(
                        reservation.getProperty().getId(), reservation.getRentalUnit().getId(),
                        reservation.getCheckIn(), reservation.getCheckOut());
        System.out.println("after findByRentalUnit");
        if (!overlappingReservations.isEmpty()) {
            throw new ReservationConflictException("The selected rental unit is already reserved for the selected date range");
        }
        System.out.println("save reservation");

         reservationRepository.save(reservation);
        return reservation;
    }

//    public List<Reservation> getReservationsForRentalUnit(Long rentalUnitId) {
//        return reservationRepository.findByRentalUnitId(rentalUnitId);
//    }
}
