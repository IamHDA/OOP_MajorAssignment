package com.group.backend.exception;

import java.time.LocalDateTime;

public class ExceptionDetail {
    private String name;
    private String detail;
    private LocalDateTime time;

    public ExceptionDetail(String name, String detail, LocalDateTime time) {
        this.name = name;
        this.detail = detail;
        this.time = time;
    }

    @Override
    public String toString(){
        return name + '\n' + detail + '\n' + time;
    }
}
