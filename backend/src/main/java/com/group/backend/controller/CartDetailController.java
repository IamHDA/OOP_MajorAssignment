package com.group.backend.controller;

import com.group.backend.dto.CartDetailDTO;
import com.group.backend.entity.Cart_Detail;
import com.group.backend.entity.Laptop;
import com.group.backend.entity.User;
import com.group.backend.repository.CartDetailRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.CartDetailService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartDetailController {

    @Autowired
    private CartDetailService cartDetailService;
    @Autowired
    private CurrentUser currentUser;
    @Autowired
    private CartDetailRepository cartDetailRepo;
    @Autowired
    private ModelMapper modelMapper;

//    @GetMapping("/cart-detail")
//    public ResponseEntity<List<CartDetailDTO>> getUserCartDetail(){
//        return ResponseEntity.ok(cartDetailService.getUserCartDetail());
//    }

    @PostMapping("/cart-detail/add")
    public ResponseEntity<Cart_Detail> addToCart(@RequestBody CartDetailDTO cartDetailDTO){
        User user = currentUser.getCurrentUser();
        Laptop laptop = modelMapper.map(cartDetailDTO.getLaptop(), Laptop.class);
        if(cartDetailRepo.findByLaptopAndUser(laptop, user).isPresent()){
            return ResponseEntity.badRequest().body(null);
        }
        return ResponseEntity.ok(cartDetailService.updateOrInsert(cartDetailDTO));
    }

    @PutMapping("/cart-detail/update")
    public ResponseEntity<Cart_Detail> updateCart(@RequestBody CartDetailDTO cartDetailDTO){
        return ResponseEntity.ok(cartDetailService.updateOrInsert(cartDetailDTO));
    }

    @DeleteMapping("/cart-detail/delete/{id}")
    public ResponseEntity<Void> deleteFromCart(@PathVariable  long id){
        cartDetailService.deleteFromCart(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/cart-detail/deleteUserCart")
    public ResponseEntity<Void> deleteAllFromCart(){
        cartDetailService.deleteAllFromCart();
        return ResponseEntity.noContent().build();
    }
}
