package com.bank_app.bank_app.service;

import com.bank_app.bank_app.entity.Appointment;
import com.bank_app.bank_app.entity.Customer;
import com.bank_app.bank_app.repository.AppointmentRepository;
import com.bank_app.bank_app.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


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
    //updated get appointmentlist class
    public List<Appointment> getAppointmentList(Long id){
        Optional<Customer> customer;
        customer = customerRepository.findById(id);
        return customer.get().getAppointments();
    }

    public Appointment update(Long appointment_id, Appointment appointment){
        //Customer customer;
        Appointment appointment1;
        System.out.println("location " + appointment.getLocation() );
        System.out.println("time " + appointment.getTime() );
        System.out.println("appointment_id " + appointment_id );
        appointment1 = appointmentRepository.findById(appointment_id).orElseThrow(()->new IllegalArgumentException("Check customer Id"));
        appointment1.setDate(appointment.getDate());
        appointment1.setTime(appointment.getTime());
        appointment1.setLocation(appointment.getLocation());
        appointment1.setPurpose(appointment.getPurpose());
        System.out.println("setCustomer ");
        System.out.println("Method call ");

        return appointmentRepository.save(appointment1);
    }
    public void  delete(Long appointment_id){
        Appointment appointment;
        appointment = appointmentRepository.findById(appointment_id).orElseThrow(()->new IllegalArgumentException("Check customer Id"));

         appointmentRepository.delete(appointment);
    }


}
