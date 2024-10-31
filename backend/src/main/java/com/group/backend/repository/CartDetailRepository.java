package com.group.backend.repository;

import com.group.backend.entity.Cart_Detail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartDetailRepository extends JpaRepository<Cart_Detail, Long> {
    List<Cart_Detail> findByUserId(long id);
    List<Cart_Detail> findAll();
    Cart_Detail findByUserIdAndLaptopId(long userId, long laptopId);

}
