package com.julioapps.sellingsapp.controllers;

import com.julioapps.sellingsapp.dto.SaleDTO;
import com.julioapps.sellingsapp.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

    @Autowired
    private SaleService service;

    @GetMapping
    private ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
        Page<SaleDTO> result = service.findAll(pageable);
        return ResponseEntity.ok(result);
    }
}
