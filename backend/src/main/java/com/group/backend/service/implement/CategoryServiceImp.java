package com.group.backend.service.implement;

import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.service.CategoryService;
import com.group.backend.service.LaptopService;
import com.group.backend.service.NormalizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImp implements CategoryService {

    @Autowired
    private LaptopService laptopService;
    @Autowired
    private NormalizationService normalizationService;

    @Override
    public List<LaptopSummaryDTO> getLaptopByCategory(String category) {
        List<LaptopDTO> laptops = laptopService.getLaptopByCategory(category);
        return normalizationService.listOfNormalizedLaptopSummary(laptops);
    }

    @Override
    public List<LaptopSummaryDTO> getLaptopByBrand(String brand) {
        List<LaptopDTO> laptops = laptopService.getLaptopByBrand(brand);
        return normalizationService.listOfNormalizedLaptopSummary(laptops);
    }

    @Override
    public List<LaptopSummaryDTO> getLaptopByState(String state) {
        List<LaptopDTO> laptops = laptopService.getLaptopByState(state);
        return normalizationService.listOfNormalizedLaptopSummary(laptops);
    }

    @Override
    public List<LaptopSummaryDTO> getLaptopByCriteria(Filter filter) {
        List<LaptopDTO> laptops = laptopService.getLaptopByCriteria(filter);
        return normalizationService.listOfNormalizedLaptopSummary(laptops);
    }
}
