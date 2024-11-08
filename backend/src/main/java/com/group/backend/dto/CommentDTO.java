package com.group.backend.dto;

import lombok.Data;

@Data
public class CommentDTO {
    private long id;
    private String userName;
    private String content;
    private String postAt;
    private String updateAt;
}
