package com.group.backend.controller;

import com.group.backend.entity.Laptop;
import com.group.backend.service.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    private LaptopService laptopService;

    @GetMapping("/laptop/{id}")
    public Laptop getLaptopById(@PathVariable long id){
        return laptopService.getLaptopById(id);
    }

    @GetMapping("/home")
    public String home(){
        return "This is home page";
    }
}
