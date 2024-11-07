package com.group.backend.repository;

import com.group.backend.entity.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecificationRepository extends JpaRepository<Specification, Long> {
}
