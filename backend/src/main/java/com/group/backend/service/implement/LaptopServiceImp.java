package com.group.backend.service.implement;

import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.entity.Laptop;
import com.group.backend.repository.LaptopFilterRepository;
import com.group.backend.repository.LaptopRepository;
import com.group.backend.service.LaptopService;
import com.group.backend.service.NormalizationService;
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
    @Autowired
    private NormalizationService normalizationService;

    @Override
    public LaptopDTO getLaptopById(long id) {
        Laptop laptop = laptopRepo.findById(id);
        return modelMapper.map(laptop, LaptopDTO.class);
    }

    @Override
    public List<LaptopDTO> getLaptopByCategory(String category) {
        List<Laptop> laptops =laptopRepo.findByCategory(category);
        return laptops.stream()
                .map(l -> modelMapper.map(l, LaptopDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<LaptopDTO> getLaptopByBrand(String brand) {
        List<Laptop> laptops = laptopRepo.findByBrand(brand);
        return laptops.stream()
                .map(l -> modelMapper.map(l, LaptopDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<LaptopDTO> getLaptopByState(String state) {
        List<Laptop> laptops = laptopRepo.findByState(state);
        return laptops.stream()
                .map(l -> modelMapper.map(l, LaptopDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<LaptopDTO> getLaptopByCriteria(Filter filter) {
        List<Laptop> laptops = laptopFilterRepo.findLaptopByCriteria(filter);
        return laptops.stream()
                .map(l -> modelMapper.map(l, LaptopDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<LaptopSummaryDTO> searchLaptop(String keyword) {
        List<Laptop> laptops = laptopRepo.searchLaptop(keyword);
        List<LaptopDTO> laptopDTO = laptops.stream()
                .map(l -> modelMapper.map(l, LaptopDTO.class))
                .collect(Collectors.toList());
        return normalizationService.listOfNormalizedLaptopSummary(laptopDTO);
    }

}
