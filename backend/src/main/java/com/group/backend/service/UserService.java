package com.group.backend.service;

import com.group.backend.dto.PasswordDTO;
import com.group.backend.dto.UserDTO;

public interface UserService {
    UserDTO getInformation();

    UserDTO changeInfo(UserDTO userDTO);

    PasswordDTO changePass(PasswordDTO passwordDTO);
}
