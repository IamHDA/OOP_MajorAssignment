package com.group.backend.repository;

import com.group.backend.dto.Filter;
import com.group.backend.entity.Category;
import com.group.backend.entity.Laptop;
import com.group.backend.entity.Laptop_Category;
import com.group.backend.entity.Specification;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class LaptopFilterRepository {
    private final EntityManager em;

    public LaptopFilterRepository(EntityManager em) {
        this.em = em;
    }

    public List<Laptop> findLaptopByCategoryOrBrandAndCriteria(String categoryName, String brandName, Filter filter){
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Laptop> cq = cb.createQuery(Laptop.class);
        List<Predicate> predicates = new ArrayList<>();

        Root<Laptop> laptop = cq.from(Laptop.class);
        Join<Laptop, Specification> specification = laptop.join("specification", JoinType.INNER);
        Join<Laptop, Laptop_Category> laptopCategory = laptop.join("laptopCategories", JoinType.INNER);
        Join<Laptop_Category, Category> category = laptopCategory.join("category", JoinType.INNER);

        if(!categoryName.isEmpty()){
            Predicate newPredicate = cb.equal(category.get("name"), categoryName);
            predicates.add(newPredicate);
        }
        if(!brandName.isEmpty()){
            Predicate newPredicate = cb.equal(laptop.get("brand"), brandName);
            predicates.add(newPredicate);
        }
        if(brandName.isEmpty() && !filter.getBrand().isEmpty()){
            Predicate newPredicate = cb.equal(laptop.get("brand"), filter.getBrand());
            predicates.add(newPredicate);
        }
        if(!filter.getRam().isEmpty()){
            Predicate newPredicate = cb.like(specification.get("ram"), "%" + filter.getRam() + "%");
            predicates.add(newPredicate);
        }
        if(!filter.getCpu().isEmpty()){
            Predicate newPredicate = cb.like(specification.get("cpu"), "%" + filter.getCpu() + "%");
            predicates.add(newPredicate);
        }
        if(!filter.getVga().isEmpty()){
            Predicate newPredicate = cb.like(specification.get("graphicsCard"), "%" + filter.getVga() + "%");
            predicates.add(newPredicate);
        }
        if(!filter.getSsd().isEmpty()){
            Predicate newPredicate = cb.like(specification.get("ssd"), "%" + filter.getSsd() + "%");
            predicates.add(newPredicate);
        }
        if(!filter.getScreenSize().isEmpty()){
            Predicate newPredicate = cb.like(specification.get("screen"), "%" + filter.getScreenSize() + "%");
            predicates.add(newPredicate);
        }
        if(filter.getMinPrice() > 0){
            Predicate newPredicate = cb.greaterThanOrEqualTo(laptop.get("price"), filter.getMinPrice());
            predicates.add(newPredicate);
        }
        if(filter.getMaxPrice() > 0){
            Predicate newPredicate = cb.lessThanOrEqualTo(laptop.get("price"), filter.getMaxPrice());
            predicates.add(newPredicate);
        }

        cq.where(predicates.toArray(new Predicate[0]));

        if("name".equals(filter.getSortBy())){
            cq.orderBy("asc".equals(filter.getSortOrder()) ? cb.asc(laptop.get("name")) : cb.desc(laptop.get("name")));
        }else if("price".equals(filter.getSortBy())){
            cq.orderBy("asc".equals(filter.getSortOrder()) ? cb.asc(laptop.get("price")) : cb.desc(laptop.get("price")));
        }

        TypedQuery<Laptop> query = em.createQuery(cq);
        return query.getResultList();
    }
}
