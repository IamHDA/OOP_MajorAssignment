package com.group.backend.Service;

import com.group.backend.Entity.Laptop;
import com.group.backend.Respository.LaptopRespository;
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
