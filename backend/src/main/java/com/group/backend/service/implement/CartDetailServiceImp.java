package com.group.backend.service.implement;

import com.group.backend.dto.CartDetailDTO;
import com.group.backend.dto.LaptopSummaryDTO;
import com.group.backend.entity.Cart_Detail;
import com.group.backend.entity.Laptop;
import com.group.backend.entity.User;
import com.group.backend.repository.CartDetailRepository;
import com.group.backend.repository.LaptopRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.CartDetailService;
import com.group.backend.service.FormatService;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartDetailServiceImp implements CartDetailService {

    @Autowired
    private LaptopRepository laptopRepo;
    @Autowired
    private CartDetailRepository cartDetailRepo;
    @Autowired
    private CurrentUser currentUser;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private FormatService formatService;

    @Override
    public List<CartDetailDTO> getUserCartDetail() {
        User user = currentUser.getCurrentUser();
        List<Cart_Detail> userCartDetail = cartDetailRepo.findByUser(user);
        return userCartDetail.stream()
                .map(tmp -> modelMapper.map(tmp, CartDetailDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void updateOrInsert(CartDetailDTO cartDetailDTO) {
        Laptop laptop = laptopRepo.findById(cartDetailDTO.getLaptop().getId());
        LaptopSummaryDTO laptopSummaryDTO = modelMapper.map(laptop, LaptopSummaryDTO.class);
        User user = currentUser.getCurrentUser();
        cartDetailDTO.setLaptop(laptopSummaryDTO);
        cartDetailDTO.setUnitPrice(formatService.priceFormat(laptop.getDiscountedPrice()));
        Cart_Detail cartDetail = modelMapper.map(cartDetailDTO, Cart_Detail.class);
        cartDetail.setUser(user);
        cartDetailRepo.save(cartDetail);
    }

    @Override
    public void deleteFromCart(long id) {
        cartDetailRepo.deleteById(id);
    }

    @Override
    @Transactional
    public void deleteAllFromCart() {
        User user = currentUser.getCurrentUser();
        cartDetailRepo.deleteByUser(user);
    }
}
