package com.group.backend.service;

import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.entity.Laptop;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LaptopService {
    LaptopDTO getLaptopById(long id);
    Laptop getLastLaptop();
    String addLaptop(LaptopDTO laptopDTO);
    List<LaptopDTO> getLaptopByCategory(String category);
    List<LaptopDTO> getLaptopByBrand(String brand);
    List<LaptopDTO> getLaptopByState(String state);
    List<LaptopDTO> getLaptopByCriteria(Filter filter);
    List<LaptopSummaryDTO> searchLaptop(String keyword);
}