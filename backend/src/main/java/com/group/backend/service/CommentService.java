package com.group.backend.service;

import com.group.backend.dto.CommentDTO;

public interface CommentService {
    String postComment(CommentDTO comment, long laptopId);
    String updateComment(CommentDTO commentDTO);
}
