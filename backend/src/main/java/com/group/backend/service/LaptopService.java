package com.group.backend.service;

import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.entity.Laptop;

import java.util.List;

public interface LaptopService {
    LaptopDTO getLaptopById(long id);
    Laptop getLastLaptop();
    String addLaptop(LaptopDTO laptopDTO);
    List<LaptopSummaryDTO> getLaptopByCategory(String category);
//    List<LaptopSummaryDTO> getLaptopByBrand(String brand);
    List<LaptopSummaryDTO> getLaptopByState(String state);
    List<LaptopSummaryDTO> getLaptopByCriteria(Filter filter);
    List<LaptopSummaryDTO> searchLaptop(String keyword);
}