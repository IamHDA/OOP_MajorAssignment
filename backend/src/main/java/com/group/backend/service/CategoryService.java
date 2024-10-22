package com.group.backend.service;

import com.group.backend.dto.CategoryDTO;
import com.group.backend.dto.Filter;

import java.util.List;

public interface CategoryService {
    List<CategoryDTO> getLaptopByCategoryAndCriteria(String categoryName, Filter filter);
    List<CategoryDTO> getLaptopByBrandAndCriteria(String brandName, Filter filter);
}
