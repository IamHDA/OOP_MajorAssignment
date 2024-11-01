package com.group.backend.repository;

import com.group.backend.entity.Cart_Detail;
import com.group.backend.entity.Laptop;
import com.group.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartDetailRepository extends JpaRepository<Cart_Detail, Long> {
    List<Cart_Detail> findAll();
    List<Cart_Detail> findByUserId(long id);
    Optional<Cart_Detail> findByLaptopAndUser(Laptop laptop, User user);
    @Modifying
    @Query("""
        delete from Cart_Detail cd
        where cd.user = :user
    """)
    void deleteByUser(User user);
}
