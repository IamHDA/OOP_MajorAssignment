package com.group.backend.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.group.backend.entity.Payment_Method;
import lombok.Data;

@Data
public class PaymentMethodDTO {
    private long id;
    @JsonCreator
    public PaymentMethodDTO(@JsonProperty("id") Long id) {
        this.id = id;
    }
}
