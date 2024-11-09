package com.group.backend.service;

import com.group.backend.dto.CommentDTO;
import com.group.backend.dto.LaptopDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.entity.Comment;

import java.time.LocalDateTime;
import java.util.List;

public interface FormatService {
    int priceFormat(int price);
    String cpuFormat(String text);
    String screenFormat(String text);
    String vgaFormat(String text);
    String ramFormat(String text);
    String romFormat(String text);
    String laptopNameFormat(String text);
    String imgTypeFormat(String text);
    String filterConditionFormat(String text);
    CommentDTO localDateTimeCommentFormat(Comment comment);
    LaptopSummaryDTO formattedLaptopSummary(LaptopSummaryDTO LaptopSummaryDTO);
    List<LaptopSummaryDTO> listOfFormattedLaptopSummary(List<LaptopSummaryDTO> laptops);
}
