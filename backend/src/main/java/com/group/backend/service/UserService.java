package com.group.backend.service;

import com.group.backend.dto.OrderDTO;
import com.group.backend.dto.PasswordDTO;
import com.group.backend.dto.UserDTO;
import com.group.backend.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    UserDTO getInformation();

    UserDTO changeInfo(UserDTO userDTO);

    PasswordDTO changePass(PasswordDTO passwordDTO);
}
