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
    public List<LaptopSummaryDTO> getLaptopByCategoryAndCriteria(String categoryName, Filter filter) {
        List<LaptopDTO> laptops = laptopService.getLaptopByCategoryAndCriteria(categoryName, filter);
        return normalizationService.listOfNormalizedLaptopSummary(laptops);
    }

    @Override
    public List<LaptopSummaryDTO> getLaptopByBrandAndCriteria(String brandName, Filter filter) {
        List<LaptopDTO> laptops = laptopService.getLaptopByBrandAndCriteria(brandName, filter);
        return normalizationService.listOfNormalizedLaptopSummary(laptops);
    }

    @Override
    public List<LaptopSummaryDTO> getLaptopByStateAndCriteria(String state, Filter filter) {
        List<LaptopDTO> laptops = laptopService.getLaptopByStateAndCriteria(state, filter);
        return normalizationService.listOfNormalizedLaptopSummary(laptops);
    }
}
