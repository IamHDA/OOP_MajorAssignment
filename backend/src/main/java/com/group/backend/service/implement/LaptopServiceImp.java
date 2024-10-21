package com.group.backend.service.implement;

import com.group.backend.dto.LaptopDTO;
import com.group.backend.entity.Laptop;
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

    @Override
    public LaptopDTO getLaptopById(long id) {
        Laptop laptop = laptopRepo.findById(id);
        return modelMapper.map(laptop, LaptopDTO.class);
    }

    @Override
    public List<LaptopDTO> getLaptopByCategory(String categoryName) {
        List<Laptop> laptops = laptopRepo.findLaptopByCategory(categoryName);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, LaptopDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<LaptopDTO> getLaptopByBrand(String brand) {
        List<Laptop> laptops = laptopRepo.findByBrand(brand);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, LaptopDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<LaptopDTO> getLaptopByStatus(String status) {
        List<Laptop> laptops = laptopRepo.findByStatus(status);
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, LaptopDTO.class))
                .collect(Collectors.toList());
    }
}
