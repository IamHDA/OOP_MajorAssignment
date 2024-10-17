package com.group.backend.service.implement;

import com.group.backend.config.Encoder;
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
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private CurrentUser currentUser;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private Encoder encoder;
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    public UserDTO getInformation() {
        User user = currentUser.getCurrentUser();
        UserDTO thisUser = modelMapper.map(user, UserDTO.class);
        return thisUser;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepo.findAll();
        List<UserDTO> allUsers = users.stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
        return allUsers;
    }

    @Override
    public UserDTO changeInfo(UserDTO userDTO) {
        User thisUser = currentUser.getCurrentUser();
        if(userDTO.getPassword() == null){
            userDTO.setPassword(encoder.encode().encode(thisUser.getPass()));
        }else{
            userDTO.setPassword(encoder.encode().encode(userDTO.getPassword()));
            UserDetails userDetails = userDetailsService.loadUserByUsername(thisUser.getEmail());
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authToken);
        }
        if(userDTO.getEmail() == null){
            userDTO.setEmail(thisUser.getEmail());
        }
        if(userDTO.getName() == null){
            userDTO.setName(thisUser.getName());
        }
        if(userDTO.getPhone() == null){
            userDTO.setPhone(thisUser.getPhone());
        }
        if(userDTO.getAddress() == null){
            userDTO.setAddress(thisUser.getAddress());
        }
        User user = modelMapper.map(userDTO, User.class);
        userRepo.save(user);
        return userDTO;
    }
}
