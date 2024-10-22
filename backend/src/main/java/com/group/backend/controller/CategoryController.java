package com.group.backend.controller;

import com.group.backend.dto.CategoryDTO;
import com.group.backend.dto.Filter;
import com.group.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/laptops-category/{category}")
    public ResponseEntity<List<CategoryDTO>> getLaptopCategory(@PathVariable("category") String category, @ModelAttribute Filter filter) {
        return ResponseEntity.ok(categoryService.getLaptopByCategoryAndCriteria(category, filter));
    }

    @GetMapping("/laptops-brand/{brand}")
    public ResponseEntity<List<CategoryDTO>> getLaptopByBrand(@PathVariable("brand") String brand, @ModelAttribute Filter filter) {
        return ResponseEntity.ok(categoryService.getLaptopByBrandAndCriteria(brand, filter));
    }
}
