package com.group.backend.dto;

import com.group.backend.entity.Order;
import lombok.Data;

import java.util.List;

@Data
public class UserDTO {

    private long id;
    private String name;
    private String email;
    private String address;
    private String phone;
    private List<Order> orders;
}
