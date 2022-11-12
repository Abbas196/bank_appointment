package com.bank_app.bank_app.repository;

import com.bank_app.bank_app.entity.Locations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationsRepository extends JpaRepository<Locations, Long> {
    List<Locations> findAll();
}
