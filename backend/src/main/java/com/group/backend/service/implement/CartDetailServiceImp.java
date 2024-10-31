package com.group.backend.service.implement;

import com.group.backend.dto.CartDetailDTO;
import com.group.backend.entity.Cart_Detail;
import com.group.backend.entity.User;
import com.group.backend.repository.CartDetailRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.CartDetailService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartDetailServiceImp implements CartDetailService {
    @Autowired
    private CartDetailRepository cartDetailRepo;

    @Autowired
    private CurrentUser currentUser;

    @Autowired
    private ModelMapper modelMapper;

    public List<CartDetailDTO> getCartDetail() {
        List<Cart_Detail> cartDetail = cartDetailRepo.findAll();
        return cartDetail.stream()
                .map(tmp -> modelMapper.map(tmp, CartDetailDTO.class))
                .collect(Collectors.toList());
    }
}
