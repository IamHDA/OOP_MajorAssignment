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
    public List<CategoryDTO> getLaptopByCriteria(Filter filter) {
        List<LaptopDTO> laptops = laptopService.getLaptopByCriteria(filter);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, CategoryDTO.class))
                .collect(Collectors.toList());
    }
}
