package com.group.backend.dto;


import com.group.backend.entity.Order;
import lombok.Data;

import java.util.List;

@Data
public class StatusDTO {
    private long id;
    private String name;
    private String description;
}
