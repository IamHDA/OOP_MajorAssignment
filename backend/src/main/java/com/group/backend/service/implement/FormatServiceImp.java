package com.group.backend.service.implement;

import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.service.FormatService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FormatServiceImp implements FormatService {

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public long priceFormat(long price) {
        price /= 100000;
        price = Math.round(price) * 10000;
        return price;
    }

    @Override
    public String cpuFormat(String text) {
        String res = "";
        for(char c : text.toCharArray()) {
            if(c == '(') break;
            res += c;
        }
        return res.trim();
    }

    @Override
    public String screenFormat(String text) {
        String res = "";
        for(char c : text.toCharArray()) {
            if(c == '(') break;
            res += c;
        }
        return res.trim();
    }

    @Override
    public String vgaFormat(String text) {
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
    public String ramFormat(String text) {
        String tmp[] = text.split(" ");
        return tmp[0];
    }

    @Override
    public String romFormat(String text) {
        String tmp[] = text.split(" ");
        return tmp[1];
    }



    @Override
    public List<LaptopSummaryDTO> listOfFormattedLaptopSummary(List<LaptopDTO> laptops) {
        return laptops.stream()
                .map(l -> {
                    LaptopSummaryDTO laptopSummary = modelMapper.map(l, LaptopSummaryDTO.class);
                    laptopSummary.getSpecification().setCpu(cpuFormat(laptopSummary.getSpecification().getCpu()));
                    laptopSummary.getSpecification().setRom(romFormat(laptopSummary.getSpecification().getRom()));
                    laptopSummary.getSpecification().setRam(ramFormat(laptopSummary.getSpecification().getRam()));
                    laptopSummary.getSpecification().setScreen(screenFormat(laptopSummary.getSpecification().getScreen()));
                    laptopSummary.getSpecification().setGraphicsCard(vgaFormat(laptopSummary.getSpecification().getGraphicsCard()));
                    return laptopSummary;
                })
                .collect(Collectors.toList());
    }
}
