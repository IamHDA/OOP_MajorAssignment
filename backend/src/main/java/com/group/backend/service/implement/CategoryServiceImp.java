package com.group.backend.service.implement;

import com.group.backend.dto.CategoryDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.entity.Category;
import com.group.backend.repository.CategoryRepository;
import com.group.backend.service.CategoryService;
import com.group.backend.service.LaptopService;
import com.group.backend.service.FormatService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImp implements CategoryService {

    @Autowired
    private LaptopService laptopService;
    @Autowired
    private FormatService formatService;
    @Autowired
    private CategoryRepository categoryRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void addCategory(CategoryDTO categoryDTO) {
        Category category = modelMapper.map(categoryDTO, Category.class);
        categoryRepo.save(category);
    }

    @Override
    public List<LaptopSummaryDTO> getLaptopByCategory(String category) {
        List<LaptopSummaryDTO> laptops = laptopService.getLaptopByCategory(category);
        return formatService.listOfFormattedLaptopSummary(laptops);
    }

    @Override
    public List<LaptopSummaryDTO> getLaptopByBrand(String brand) {
        List<LaptopSummaryDTO> laptops = laptopService.getLaptopByBrand(brand);
        return formatService.listOfFormattedLaptopSummary(laptops);
    }

    @Override
    public List<LaptopSummaryDTO> getLaptopByState(String state) {
        List<LaptopSummaryDTO> laptops = laptopService.getLaptopByState(state);
        return formatService.listOfFormattedLaptopSummary(laptops);
    }

    @Override
    public List<LaptopSummaryDTO> getLaptopByCriteria(Filter filter) {
        List<LaptopSummaryDTO> laptops = laptopService.getLaptopByCriteria(filter);
        return formatService.listOfFormattedLaptopSummary(laptops);
    }
}
