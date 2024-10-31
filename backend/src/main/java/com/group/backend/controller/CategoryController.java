package com.group.backend.controller;

import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.dto.Filter;
import com.group.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/collections")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/laptops-category/{category}")
    public ResponseEntity<List<LaptopSummaryDTO>> getLaptopByCategory(@PathVariable("category") String category, @ModelAttribute Filter filter) {
        return ResponseEntity.ok(categoryService.getLaptopByCategoryAndCriteria(category, filter));
    }

    @GetMapping("/laptops-brand/{brand}")
    public ResponseEntity<List<LaptopSummaryDTO>> getLaptopByBrand(@PathVariable("brand") String brand, @ModelAttribute Filter filter) {
        return ResponseEntity.ok(categoryService.getLaptopByBrandAndCriteria(brand, filter));
    }

    @GetMapping("/laptop-state/{state}")
    public ResponseEntity<List<LaptopSummaryDTO>> getLaptopByState(@PathVariable("state") String state, @ModelAttribute Filter filter) {
        return ResponseEntity.ok(categoryService.getLaptopByStateAndCriteria(state, filter));
    }
}
