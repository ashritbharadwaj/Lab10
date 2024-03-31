package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface movielistRepository extends JpaRepository<movie, Long>{
    
}
