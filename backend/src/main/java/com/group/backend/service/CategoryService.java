package com.group.backend.service;

import com.group.backend.dto.CategoryDTO;

import java.util.List;

public interface CategoryService {
    List<CategoryDTO> getLaptopByBrand(String brand);
    List<CategoryDTO> getLaptopByCategory(String categoryName);
    List<CategoryDTO> getLaptopByStatus(String status);
}
