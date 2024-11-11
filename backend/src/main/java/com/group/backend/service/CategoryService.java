package com.group.backend.service;

import com.group.backend.dto.CategoryDTO;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.dto.Filter;

import java.util.List;

public interface CategoryService {
    void addCategory(CategoryDTO category);
    List<LaptopSummaryDTO> getLaptopByCategory(String category);
//    List<LaptopSummaryDTO> getLaptopByBrand(String brand);
//    List<LaptopSummaryDTO> getLaptopByState(String state);
    List<LaptopSummaryDTO> getLaptopByCriteria(Filter filter);
}
