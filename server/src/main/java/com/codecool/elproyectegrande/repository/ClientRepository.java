package com.codecool.elproyectegrande.repository;

import com.codecool.elproyectegrande.model.Client;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Long>{

    Client findByEmailAddress(String emailAddress);


}
