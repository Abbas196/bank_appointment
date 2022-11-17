package com.bank_app.bank_app.service;

import com.bank_app.bank_app.entity.Appointment;
import com.bank_app.bank_app.entity.Customer;
import com.bank_app.bank_app.repository.AppointmentRepository;
import com.bank_app.bank_app.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class AppointmentService {
    private final CustomerRepository customerRepository;
    private final AppointmentRepository appointmentRepository;

    @Transactional
    public Appointment create(Long cus_id, Appointment appointment){
        Customer customer;
        System.out.println("location " + appointment.getLocation() );
        System.out.println("time " + appointment.getTime() );
        System.out.println("customer id " + cus_id );
        customer = customerRepository.findById(cus_id).orElseThrow(()->new IllegalArgumentException("Check customer Id"));

        System.out.println("setCustomer ");
        appointment.setCustomer(customer);
        System.out.println("Method call ");

        return appointmentRepository.save(appointment);
    }

}
