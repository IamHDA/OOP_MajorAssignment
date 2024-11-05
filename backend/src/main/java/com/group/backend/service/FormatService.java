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
    List<LaptopSummaryDTO> listOfFormattedLaptopSummary(List<LaptopDTO> laptops);
}
