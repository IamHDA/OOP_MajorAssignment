package com.group.backend.controller;

import com.group.backend.dto.CategoryDTO;
import com.group.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/category/{status}")
    public ResponseEntity<List<CategoryDTO>> getLaptopByStatus(@PathVariable String status) {
        return ResponseEntity.ok(categoryService.getLaptopByStatus(status));
    }

    @GetMapping("/category/brand/{brand}")
    public ResponseEntity<List<CategoryDTO>> getLaptopByBrand(@PathVariable String brand) {
        return ResponseEntity.ok(categoryService.getLaptopByBrand(brand));
    }

    @GetMapping("/category/subcategory/{categoryName}")
    public ResponseEntity<List<CategoryDTO>> getSubcategoryByCategory(@PathVariable String categoryName) {
        return ResponseEntity.ok(categoryService.getLaptopByCategory(categoryName));
    }
}
