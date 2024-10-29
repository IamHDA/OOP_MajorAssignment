package com.group.backend.service;

import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;

import java.util.List;

public interface LaptopService {
    LaptopDTO getLaptopById(long id);

    List<LaptopDTO> getLaptopByCategoryAndCriteria(String categoryName, Filter filter);
    List<LaptopDTO> getLaptopByBrandAndCriteria(String brandName, Filter filter);
}