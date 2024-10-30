package com.group.backend.repository;

import com.group.backend.entity.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LaptopRepository extends JpaRepository<Laptop, Long> {
    List<Laptop> findAll();
    Laptop findById(long id);
    @Query("""
        select l from Laptop l
        join l.laptopCategories lc
        join lc.category c
        where c.name = :categoryName
    """)
    List<Laptop> findLaptopByCategory(String categoryName);

    @Query("""
        select l from Laptop l
        join l.specification s
        where lower(l.name) like lower(concat('%', :keyword, '%'))
        or lower(l.brand) like lower(concat('%', :keyword, '%'))
        or lower(s.rom) like lower(concat('%', :keyword, '%'))
        or lower(s.ram) like lower(concat('%', :keyword, '%'))
        or lower(s.cpu) like lower(concat('%', :keyword, '%'))
        or lower(s.graphicsCard) like lower(concat('%', :keyword, '%'))
    """)
    List<Laptop> searchLaptop(String keyword);
}
