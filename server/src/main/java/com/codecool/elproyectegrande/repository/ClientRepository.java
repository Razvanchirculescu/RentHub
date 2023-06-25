package com.codecool.elproyectegrande.repository;

import com.codecool.elproyectegrande.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface ClientRepository extends JpaRepository<Client, Long> {

    Optional<Client> findByEmailAddress(String email);


}
