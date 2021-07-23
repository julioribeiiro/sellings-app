package com.julioapps.sellingsapp.dto;

import com.julioapps.sellingsapp.entities.Seller;

import java.io.Serializable;

public class SellerDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;

    public SellerDTO() {

    }

    public SellerDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public SellerDTO(Seller entitiy) {
        this.id = entitiy.getId();
        this.name = entitiy.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
