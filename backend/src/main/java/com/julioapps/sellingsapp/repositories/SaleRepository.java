package com.julioapps.sellingsapp.repositories;

import com.julioapps.sellingsapp.entities.Sale;
import com.julioapps.sellingsapp.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
