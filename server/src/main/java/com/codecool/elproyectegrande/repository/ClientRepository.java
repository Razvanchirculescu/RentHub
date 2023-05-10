package com.codecool.elproyectegrande.repository;

import com.codecool.elproyectegrande.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface ClientRepository extends JpaRepository<Client, Long>{

//    Client findByEmailAddress(String emailAddress);

//    Optional<Client> findByEmail(String email);//de la Cata

    Optional<Client> findByEmailAddress(String email);


}
