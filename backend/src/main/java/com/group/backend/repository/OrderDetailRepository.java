package com.group.backend.repository;

import com.group.backend.entity.Order_Detail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailRepository extends JpaRepository<Order_Detail, Long> {
    List<Order_Detail> findByOrderId(Long id);
}
