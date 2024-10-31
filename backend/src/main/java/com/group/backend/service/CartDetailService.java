package com.group.backend.service;

import com.group.backend.dto.CartDetailDTO;
import com.group.backend.entity.Cart_Detail;
import com.group.backend.entity.Laptop;
import com.group.backend.entity.User;

import java.util.List;

public interface CartDetailService {
    List<CartDetailDTO> getCartDetail();
    List<CartDetailDTO> getUserCartDetail();
    Cart_Detail updateOrInsert (CartDetailDTO cartDetailDTO);
}
