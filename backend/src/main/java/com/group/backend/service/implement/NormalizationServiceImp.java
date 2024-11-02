package com.group.backend.service.implement;

import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.service.NormalizationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NormalizationServiceImp implements NormalizationService {

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String cpuNormalize(String text) {
        String res = "";
        for(char c : text.toCharArray()) {
            if(c == '(') break;
            res += c;
        }
        return res.trim();
    }

    @Override
    public String screenNormalize(String text) {
        String res = "";
        for(char c : text.toCharArray()) {
            if(c == '(') break;
            res += c;
        }
        return res.trim();
    }

    @Override
    public String vgaNormalize(String text) {
        String res = "";
        String tmp[] = text.split(" ");
        if(tmp.length <= 4) {
            for (String s : tmp) {
                res += s + " ";
            }
        }else{
            for(String s : tmp) {
                if(s.contains("GB")) break;
                res += s + " ";
            }
        }
        return res.trim();
    }

    @Override
    public String ramNormalize(String text) {
        String tmp[] = text.split(" ");
        return tmp[0];
    }

    @Override
    public String romNormalize(String text) {
        String tmp[] = text.split(" ");
        return tmp[1];
    }


    @Override
    public List<LaptopSummaryDTO> listOfLaptopSummary(List<LaptopDTO> laptops) {
        return laptops.stream()
                .map(l -> {
                    LaptopSummaryDTO laptopSummary = modelMapper.map(l, LaptopSummaryDTO.class);
                    laptopSummary.getSpecification().setCpu(cpuNormalize(laptopSummary.getSpecification().getCpu()));
                    laptopSummary.getSpecification().setRom(romNormalize(laptopSummary.getSpecification().getRom()));
                    laptopSummary.getSpecification().setRam(ramNormalize(laptopSummary.getSpecification().getRam()));
                    laptopSummary.getSpecification().setScreen(screenNormalize(laptopSummary.getSpecification().getScreen()));
                    laptopSummary.getSpecification().setGraphicsCard(vgaNormalize(laptopSummary.getSpecification().getGraphicsCard()));
                    return laptopSummary;
                })
                .collect(Collectors.toList());
    }
}
