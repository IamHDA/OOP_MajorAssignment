package com.group.backend.service.implement;

import com.group.backend.dto.CommentDTO;
import com.group.backend.entity.Comment;
import com.group.backend.entity.Laptop;
import com.group.backend.entity.User;
import com.group.backend.repository.CommentRepository;
import com.group.backend.repository.LaptopRepository;
import com.group.backend.security.CurrentUser;
import com.group.backend.service.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CommentServiceImp implements CommentService {

    @Autowired
    private CurrentUser currentUser;
    @Autowired
    private LaptopRepository laptopRepo;
    @Autowired
    private CommentRepository commentRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String postComment(CommentDTO commentDTO, long laptopId) {
        Comment comment = modelMapper.map(commentDTO, Comment.class);
        User user = currentUser.getCurrentUser();
        Laptop laptop = laptopRepo.findById(laptopId);
        comment.setUser(user);
        comment.setLaptop(laptop);
        comment.setPostAt(LocalDateTime.now());
        commentRepo.save(comment);
        return "Comment posted successfully";
    }

    @Override
    public String updateComment(CommentDTO commentDTO) {
        Comment comment = commentRepo.findById(commentDTO.getId());
        comment.setUpdateAt(LocalDateTime.now());
        comment.setContent(commentDTO.getContent());
        commentRepo.save(comment);
        return "Comment updated successfully";
    }
}
