package com.group.backend.repository;

import com.group.backend.entity.Order;
import com.group.backend.entity.Order_Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepository extends JpaRepository<Order_Detail, Long> {
    List<Order_Detail> findByOrderId(Long id);

    @Query("""
        SELECT od FROM Order_Detail od
        WHERE od.order.id IN (
            SELECT o.id FROM Order o WHERE o.status = 'COMPLETED'
        )
    """)
    List<Order_Detail> findByOrder(Order_Detail orderDetail);
}
