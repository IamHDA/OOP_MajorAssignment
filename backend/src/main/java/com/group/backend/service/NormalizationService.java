package com.group.backend.service;

import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;

import java.util.List;

public interface NormalizationService {
    String cpuNormalize(String text);
    String screenNormalize(String text);
    String vgaNormalize(String text);
    String ramNormalize(String text);
    String romNormalize(String text);
    List<LaptopSummaryDTO> listOfNormalizedLaptopSummary(List<LaptopDTO> laptops);
}
