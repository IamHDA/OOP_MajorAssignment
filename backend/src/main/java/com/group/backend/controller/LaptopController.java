package com.group.backend.controller;

import com.group.backend.dto.LaptopDTO;
import com.group.backend.service.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LaptopController {

    @Autowired
    private LaptopService laptopService;

    @GetMapping("/laptop/{id}")
    public ResponseEntity<LaptopDTO> getLaptopById(@PathVariable long id) {
        return ResponseEntity.ok(laptopService.getLaptopById(id));
    }
}
