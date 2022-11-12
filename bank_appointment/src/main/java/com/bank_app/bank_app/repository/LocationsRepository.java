package com.bank_app.bank_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bank_app.bank_app.entity.Locations;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationsRepository extends JpaRepository<Locations, Long> {
}
