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
    private CurrentUser currentUser;
    @Autowired
    private CartDetailRepository cartDetailRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CartDetailDTO> getCartDetailByUserId() {
        User user = currentUser.getCurrentUser();
        List<Cart_Detail> cartDetails = cartDetailRepository.findByUserId(user.getId());
        return cartDetails.stream()
                .map(tmp -> modelMapper.map(tmp, CartDetailDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public Cart_Detail addLaptopIntoCart(CartDetailDTO cartDetailDTO) {
        User user = currentUser.getCurrentUser();
        Cart_Detail cartDetail = cartDetailRepository.findByUserIdAndLaptopId(user.getId(), cartDetailDTO.getLaptop().getId());

        if(cartDetail == null) {
            cartDetail = modelMapper.map(cartDetailDTO, Cart_Detail.class);
            cartDetail.setUser(user);
        }else{
            cartDetail.setQuantity(cartDetail.getQuantity() + cartDetailDTO.getQuantity());
        }
//        cartDetail.setUser(user);
        cartDetailRepository.save(cartDetail);
        return cartDetail;
    }

}
