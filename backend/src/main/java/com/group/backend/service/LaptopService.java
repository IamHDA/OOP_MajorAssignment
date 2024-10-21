package com.group.backend.service;

import com.group.backend.dto.Filter;
import com.group.backend.dto.LaptopDTO;

import java.util.List;

public interface LaptopService {
    LaptopDTO getLaptopById(long id);

    List<LaptopDTO> getLaptopByCriteria(Filter filter);
}