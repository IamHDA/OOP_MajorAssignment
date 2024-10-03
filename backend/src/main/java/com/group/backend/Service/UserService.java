package com.group.backend.Service;

import com.group.backend.Model.User;
import com.group.backend.Respository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRespository userRespository;
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public User register(User user){
        System.out.println(user.getPass());
        user.setPass(encoder.encode(user.getPass()));
        return userRespository.save(user);
    }
}
