package com.julioapps.sellingsapp.repositories;

import com.julioapps.sellingsapp.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
