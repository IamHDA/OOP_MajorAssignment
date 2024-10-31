package com.group.backend.service;


import com.group.backend.dto.CartDetailDTO;
import com.group.backend.entity.Cart_Detail;

import java.util.List;

public interface CartDetailService {
    List<CartDetailDTO> getCartDetailByUserId();
    Cart_Detail addLaptopIntoCart(CartDetailDTO cartDetailDTO);
}
