package com.julioapps.sellingsapp.services;

import com.julioapps.sellingsapp.dto.SaleDTO;
import com.julioapps.sellingsapp.dto.SaleSuccessDTO;
import com.julioapps.sellingsapp.dto.SaleSumDTO;
import com.julioapps.sellingsapp.entities.Sale;
import com.julioapps.sellingsapp.repositories.SaleRepository;
import com.julioapps.sellingsapp.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable){
        sellerRepository.findAll();
        Page<Sale> result = repository.findAll(pageable);
        return result.map(x -> new SaleDTO(x));
    }

    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupedBySeller(){
        return repository.amountGroupedBySeller();
    }

    public List<SaleSuccessDTO> successGroupedBySeller(){
        return repository.successGroupedBySeller();
    }

}
