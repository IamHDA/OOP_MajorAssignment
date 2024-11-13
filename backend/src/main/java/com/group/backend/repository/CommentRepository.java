package com.group.backend.repository;

import com.group.backend.dto.CommentDTO;
import com.group.backend.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    Comment findById(long id);
    List<Comment> findAll();
}
