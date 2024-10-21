package com.group.backend.service;

import com.group.backend.dto.CategoryDTO;
import com.group.backend.dto.Filter;

import java.util.List;

public interface CategoryService {
    List<CategoryDTO> getLaptopByCriteria(Filter filter);
}
