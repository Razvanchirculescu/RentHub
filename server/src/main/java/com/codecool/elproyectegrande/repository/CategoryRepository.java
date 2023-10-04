package com.codecool.elproyectegrande.repository;


import com.codecool.elproyectegrande.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
//    @Query(value = "SELECT * FROM category WHERE name=?",nativeQuery = true)
    Category findByName(String name);
}
