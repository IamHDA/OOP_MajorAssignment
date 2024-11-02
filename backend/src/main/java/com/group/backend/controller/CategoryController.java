package com.group.backend.controller;

import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.dto.Filter;
import com.group.backend.entity.Laptop;
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
    public ResponseEntity<List<LaptopSummaryDTO>> getLaptopByCategory(@PathVariable("category") String category) {
        return ResponseEntity.ok(categoryService.getLaptopByCategory(category));
    }

    @GetMapping("/laptops-brand/{brand}")
    public ResponseEntity<List<LaptopSummaryDTO>> getLaptopByBrand(@PathVariable("brand") String brand) {
        return ResponseEntity.ok(categoryService.getLaptopByBrand(brand));
    }

    @GetMapping("/laptops-state/{state}")
    public ResponseEntity<List<LaptopSummaryDTO>> getLaptopByState(@PathVariable("state") String state) {
        return ResponseEntity.ok(categoryService.getLaptopByState(state));
    }

    @GetMapping("/filter")
    public ResponseEntity<List<LaptopSummaryDTO>> getLaptopByFilter(@ModelAttribute Filter filter) {
        return ResponseEntity.ok(categoryService.getLaptopByCriteria(filter));
    }
}
