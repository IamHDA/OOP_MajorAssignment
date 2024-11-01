package com.group.backend.controller;

import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.service.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/laptop")
public class LaptopController {

    @Autowired
    private LaptopService laptopService;

    @GetMapping("/{id}")
    public ResponseEntity<LaptopDTO> getLaptopById(@PathVariable long id) {
        return ResponseEntity.ok(laptopService.getLaptopById(id));
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<LaptopSummaryDTO>> searchLaptop(@RequestParam String keyword) {
        return ResponseEntity.ok(laptopService.searchLaptop(keyword));
    }
}
