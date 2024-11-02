package com.group.backend.service;

import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.dto.Filter;

import java.util.List;

public interface CategoryService {
    List<LaptopSummaryDTO> getLaptopByCategoryAndCriteria(String categoryName, Filter filter);
    List<LaptopSummaryDTO> getLaptopByBrandAndCriteria(String brandName, Filter filter);
    List<LaptopSummaryDTO> getLaptopByStateAndCriteria(String state, Filter filter);
}
