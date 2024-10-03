package com.group.backend.Respository;

import com.group.backend.Model.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaptopRespository extends JpaRepository<Laptop, Long> {
    Laptop findById(long id);
}
