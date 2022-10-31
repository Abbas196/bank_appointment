package com.bank_app.bank_app.service;

import com.bank_app.bank_app.entity.Customer;
import com.bank_app.bank_app.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;
    @Transactional
    public Customer create(Customer customer){
        return customerRepository.save(customer);
    }

}
