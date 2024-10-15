package com.group.backend.respository;

import com.group.backend.entity.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaptopRespository extends JpaRepository<Laptop, Long> {
    Laptop findById(long id);
}
