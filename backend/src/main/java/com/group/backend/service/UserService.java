package com.group.backend.service;

import com.group.backend.dto.PasswordDTO;
import com.group.backend.dto.UserDTO;
import com.group.backend.entity.User;

public interface UserService {
    UserDTO getInformation();

    UserDTO changeInfo(UserDTO userDTO);

    String changePass(User user, PasswordDTO passwordDTO);
}
