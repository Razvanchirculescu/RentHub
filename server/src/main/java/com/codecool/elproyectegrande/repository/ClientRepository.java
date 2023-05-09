package com.codecool.elproyectegrande.repository;

import com.codecool.elproyectegrande.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long>{

    Client findByEmailAddress(String emailAddress);


}
