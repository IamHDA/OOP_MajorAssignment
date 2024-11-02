package com.group.backend.dto;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class StatusDTO {
    private long id;
    @JsonCreator
    public StatusDTO(@JsonProperty("id") Long id) {
        this.id = id;
    }
}
