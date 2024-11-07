package com.group.backend.repository;

import com.group.backend.entity.Order;
import com.group.backend.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query("""
        select o from Order o
        where o.user = :user
        order by o.id desc
    """)
    List<Order> reverseSortedOrderByUser(User user);
    List<Order> findByUserId(long customerId);
    List<Order> findAll();

    @Transactional
    void deleteByUser(User user);
}
