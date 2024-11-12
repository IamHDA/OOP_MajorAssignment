package com.group.backend.service.implement;

import com.group.backend.dto.ChangeUserRoleDTO;
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

import java.util.List;


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
    public String changePass(User user, PasswordDTO passwordDTO) {
        if(encoder.matches(passwordDTO.getPassword(), user.getPass())){
            return "Can not use old password";
        }
        user.setPass(encoder.encode(passwordDTO.getPassword()));
        userRepo.save(user);
        return "Change password successfully";
    }

    @Override
    public String changeUsersRole(ChangeUserRoleDTO changeUserRoleDTO) {
        for(long x : changeUserRoleDTO.getUserIds()) {
            User user = userRepo.findById(x).get();
            user.setRole(changeUserRoleDTO.getRole());
            userRepo.save(user);
        }
        return "Change users role successfully";
    }

    @Override
    public String deleteUsers(List<Long> list) {
        for(long x : list) {
            userRepo.deleteById(x);
        }
        return "Delete users successfully";
    }
}
