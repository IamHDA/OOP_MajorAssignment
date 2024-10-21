package com.group.backend.service.implement;

import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.entity.Laptop;
import com.group.backend.repository.LaptopRepository;
import com.group.backend.repository.LaptopSearchRepository;
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
    private LaptopSearchRepository laptopSearchRepo;

    @Override
    public LaptopDTO getLaptopById(long id) {
        Laptop laptop = laptopRepo.findById(id);
        return modelMapper.map(laptop, LaptopDTO.class);
    }

    @Override
    public List<LaptopDTO> getLaptopByCriteria(Filter filter) {
        List<Laptop> laptops = laptopSearchRepo.findByCriteria(filter.getCategoryName(),
                filter.getBrand(),
                filter.getStatus(),
                filter.getVga(),
                filter.getCpu(),
                filter.getRam(),
                filter.getSsd(),
                filter.getScreenSize(),
                filter.getSortBy(),
                filter.getSortOrder(),
                filter.getMinPrice(),
                filter.getMaxPrice());
        return laptops.stream()
                .map(laptop -> modelMapper.map(laptop, LaptopDTO.class))
                .collect(Collectors.toList());
    }
}
