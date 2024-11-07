package com.group.backend.service;

import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;

import java.util.List;

public interface FormatService {
    long priceFormat(long price);
    String cpuFormat(String text);
    String screenFormat(String text);
    String vgaFormat(String text);
    String ramFormat(String text);
    String romFormat(String text);
    String laptopNameFormat(String text);
    String imgTypeFormat(String text);
    LaptopSummaryDTO formattedLaptopSummary(LaptopSummaryDTO LaptopSummaryDTO);
    List<LaptopSummaryDTO> listOfFormattedLaptopSummary(List<LaptopDTO> laptops);
}
