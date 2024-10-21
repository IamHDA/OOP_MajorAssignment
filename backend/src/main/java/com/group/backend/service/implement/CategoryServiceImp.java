package com.group.backend.service.implement;

import com.group.backend.dto.CategoryDTO;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.entity.Laptop;
import com.group.backend.repository.CategoryRepository;
import com.group.backend.repository.LaptopRepository;
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
    private CategoryRepository categoryRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CategoryDTO> getLaptopByBrand(String brand) {
        List<LaptopDTO> laptopDTO = laptopService.getLaptopByBrand(brand);
        return laptopDTO.stream()
                .map(laptops -> modelMapper.map(laptops, CategoryDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<CategoryDTO> getLaptopByCategory(String categoryName) {
        List<LaptopDTO> laptops = laptopService.getLaptopByCategory(categoryName);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, CategoryDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<CategoryDTO> getLaptopByStatus(String status) {
        List<LaptopDTO> laptops = laptopService.getLaptopByStatus(status);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, CategoryDTO.class))
                .collect(Collectors.toList());
    }
}
