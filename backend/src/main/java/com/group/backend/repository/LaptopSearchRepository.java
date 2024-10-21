package com.group.backend.repository;

import com.group.backend.entity.Category;
import com.group.backend.entity.Laptop;
import com.group.backend.entity.Laptop_Category;
import com.group.backend.entity.Specification;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class LaptopSearchRepository {

    public final EntityManager em;

    public List<Laptop> findByCriteria(String categoryName, String brand, String status, String vga, String cpu, String ram, String ssd, String screenSize, String sortBy, String sortOrder, int minPrice, int maxPrice){
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Laptop> cq = cb.createQuery(Laptop.class);
        List<Predicate> predicates = new ArrayList<>();

        Root<Laptop> laptop = cq.from(Laptop.class);
        Join<Laptop, Specification> spec = laptop.join("specification", JoinType.INNER);
        Join<Laptop, Laptop_Category> laptopCategory = spec.join("laptopCategories", JoinType.INNER);
        Join<Laptop_Category, Category> category = laptopCategory.join("category", JoinType.INNER);

        if(categoryName != null){
            predicates.add(cb.equal(category.get("name"), categoryName));
        }
        if(brand != null){
            predicates.add(cb.equal(laptop.get("brand"), brand));
        }
        if(status != null){
            predicates.add(cb.equal(laptop.get("status"), status));
        }
        if(minPrice > 0){
            predicates.add(cb.greaterThanOrEqualTo(laptop.get("price"), minPrice));
        }
        if(maxPrice > 0){
            predicates.add(cb.lessThanOrEqualTo(laptop.get("price"), maxPrice));
        }
        if(vga != null){
            predicates.add(cb.like(spec.get("graphicsCard"), "%"+vga+"%"));
        }
        if(cpu != null){
            predicates.add(cb.like(spec.get("cpu"), "%"+cpu+"%"));
        }
        if(ram != null){
            predicates.add(cb.like(spec.get("ram"), "%"+ram+"%"));
        }
        if(ssd != null){
            predicates.add(cb.like(spec.get("rom"), "%"+ssd+"%"));
        }
        if(screenSize != null){
            predicates.add(cb.like(spec.get("screen"), "%"+screenSize+"%"));
        }
        if("price".equals(sortBy)){
            cq.orderBy("asc".equals(sortOrder) ? cb.asc(laptop.get("price")) : cb.desc(laptop.get("price")));
        }else if("name".equals(sortBy)){
            cq.orderBy("asc".equals(sortOrder) ? cb.asc(laptop.get("name")) : cb.desc(laptop.get("name")));
        }

        return em.createQuery(cq).getResultList();
    }

}
