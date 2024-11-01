package com.group.backend.service.implement;

import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.entity.Laptop;
import com.group.backend.repository.LaptopFilterRepository;
import com.group.backend.repository.LaptopRepository;
import com.group.backend.service.LaptopService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LaptopServiceImp implements LaptopService {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private LaptopRepository laptopRepo;
    @Autowired
    private LaptopFilterRepository laptopFilterRepo;

    @Override
    public LaptopDTO getLaptopById(long id) {
        Laptop laptop = laptopRepo.findById(id);
        return modelMapper.map(laptop, LaptopDTO.class);
    }

    @Override
    public List<LaptopDTO> getLaptopByCategoryAndCriteria(String categoryName, Filter filter) {
        List<Laptop> laptops = laptopFilterRepo.findLaptopByCategoryOrBrandOrStateAndCriteria(categoryName, "", "", filter);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, LaptopDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<LaptopDTO> getLaptopByBrandAndCriteria(String brandName, Filter filter) {
        List<Laptop> laptops = laptopFilterRepo.findLaptopByCategoryOrBrandOrStateAndCriteria("", brandName, "", filter);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, LaptopDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<LaptopDTO> getLaptopByStateAndCriteria(String state, Filter filter) {
        List<Laptop> laptops = laptopFilterRepo.findLaptopByCategoryOrBrandOrStateAndCriteria("", "", state, filter);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, LaptopDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<LaptopDTO> searchLaptop(String keyword) {
        List<Laptop> laptops = laptopRepo.searchLaptop(keyword);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, LaptopDTO.class))
                .collect(Collectors.toList());
    }

}
