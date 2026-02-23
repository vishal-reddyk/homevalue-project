package com.project22.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project22.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
