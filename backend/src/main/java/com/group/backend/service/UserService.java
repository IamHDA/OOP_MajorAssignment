package com.group.backend.service;

import com.group.backend.dto.OrderDTO;
import com.group.backend.dto.UserDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    UserDTO getInformation();
    List<OrderDTO> getCurrentOrders();
}
