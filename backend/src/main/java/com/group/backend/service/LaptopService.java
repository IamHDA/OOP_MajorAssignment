package com.group.backend.service;

import com.group.backend.entity.Laptop;
import com.group.backend.respository.LaptopRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LaptopService {

    @Autowired
    private LaptopRespository laptopRespository;

    public Laptop getLaptopById(long id) {
        return laptopRespository.findById(id);
    }
}
