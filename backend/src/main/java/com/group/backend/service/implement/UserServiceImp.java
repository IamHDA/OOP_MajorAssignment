package com.group.backend.service.implement;

import com.group.backend.dto.PasswordDTO;
import com.group.backend.dto.UserDTO;
import com.group.backend.entity.User;
import com.group.backend.repository.UserRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImp implements UserService {

    @Autowired
    private CurrentUser currentUser;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private BCryptPasswordEncoder encoder;
    @Autowired
    private UserRepository userRepo;

    @Override
    public UserDTO getInformation() {
        User user = currentUser.getCurrentUser();
        UserDTO thisUser = modelMapper.map(user, UserDTO.class);
        return thisUser;
    }

    @Override
    public UserDTO changeInfo(UserDTO userDTO) {
        User thisUser = currentUser.getCurrentUser();
        if(userDTO.getName()!= null){
            thisUser.setName(userDTO.getName());
        }
        if(userDTO.getPhone()!= null){
            thisUser.setPhone(userDTO.getPhone());
        }
        if(userDTO.getAddress() != null){
            thisUser.setAddress(userDTO.getAddress());
        }
        userRepo.save(thisUser);
        return userDTO;
    }

    @Override
    public String changePass(PasswordDTO passwordDTO) {
        User thisUser = currentUser.getCurrentUser();
        if(encoder.matches(passwordDTO.getPassword(), thisUser.getPass())){
            return "Can not use old password";
        }
        thisUser.setPass(encoder.encode(passwordDTO.getPassword()));
        userRepo.save(thisUser);
        return "Change password successful";
    }
}
