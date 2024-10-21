package com.group.backend.service;

import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;

import java.util.List;

public interface LaptopService {
    LaptopDTO getLaptopById(long id);

    List<LaptopDTO> getLaptopByCategory(String categoryName);

    List<LaptopDTO> getLaptopByBrand(String brand);

    List<LaptopDTO> getLaptopByStatus(String status);
}