package com.group.backend.service.implement;

import com.group.backend.dto.CategoryDTO;
import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.service.CategoryService;
import com.group.backend.service.LaptopService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImp implements CategoryService {

    @Autowired
    private LaptopService laptopService;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CategoryDTO> getLaptopByCategoryAndCriteria(String categoryName, Filter filter) {
        List<LaptopDTO> laptops = laptopService.getLaptopByCategoryAndCriteria(categoryName, filter);
        return laptops.stream()
                .map(l -> modelMapper.map(l, CategoryDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<CategoryDTO> getLaptopByBrandAndCriteria(String brandName, Filter filter) {
        List<LaptopDTO> laptops = laptopService.getLaptopByBrandAndCriteria(brandName, filter);
        return laptops.stream()
                .map(l -> modelMapper.map(l, CategoryDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<CategoryDTO> getLaptopByStateAndCriteria(String state, Filter filter) {
        List<LaptopDTO> laptops = laptopService.getLaptopByStateAndCriteria(state, filter);
        return laptops.stream()
                .map(l -> modelMapper.map(l, CategoryDTO.class))
                .collect(Collectors.toList());
    }
}
