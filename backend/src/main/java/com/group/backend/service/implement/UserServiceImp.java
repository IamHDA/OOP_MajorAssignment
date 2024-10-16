package com.group.backend.service.implement;

import com.group.backend.dto.OrderDTO;
import com.group.backend.dto.UserDTO;
import com.group.backend.entity.User;
import com.group.backend.repository.OrderRepository;
import com.group.backend.repository.UserRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.OrderService;
import com.group.backend.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private CurrentUser currentUser;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private OrderService orderService;

    @Override
    public UserDTO getInformation() {
        User user = currentUser.getCurrentUser();
        UserDTO thisUser = modelMapper.map(user, UserDTO.class);
        return thisUser;
    }

    @Override
    public List<OrderDTO> getCurrentOrders() {
        return orderService.getOrderByUser();
    }
}
