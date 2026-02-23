package com.project22.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project22.model.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {

}
