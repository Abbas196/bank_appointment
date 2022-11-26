package com.bank_app.bank_app.controller;


import com.bank_app.bank_app.entity.Appointment;
import com.bank_app.bank_app.entity.Customer;
import com.bank_app.bank_app.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@CrossOrigin

public class CustomerController {
    private final CustomerService customerService;

    @PostMapping("/customers")
    public ResponseEntity<?> save(@RequestBody Customer customer){

        System.out.println("title " + customer.getName());
        return new ResponseEntity<>(customerService.create(customer), HttpStatus.CREATED);

    }
    @GetMapping("/customers/{customerId}")
    public List<Appointment> customerDetails(@PathVariable(value = "customerId") Long id){
        return customerService.getAppointmentList(id);
    }

}
