package com.bank_app.bank_app.service;

import com.bank_app.bank_app.entity.Appointment;
import com.bank_app.bank_app.entity.Customer;
import com.bank_app.bank_app.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;
    @Transactional
    public Customer create(Customer customer){
        return customerRepository.save(customer);
    }

    @Transactional
    public Optional<Customer> getCustomerDetails(Long id){
        return customerRepository.findById(id);
    }

    public List<Appointment> getAppointmentList(Long id){
        Optional<Customer> customer;
        customer = customerRepository.findById(id);
        return customer.get().getAppointments();
    }

    public List<Customer> getCustomers(){
        return customerRepository.findAll();
    }

}
