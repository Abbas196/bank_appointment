package com.bank_app.bank_app.controller;

import com.bank_app.bank_app.entity.Appointment;
import com.bank_app.bank_app.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin

public class AppointmentController {
    private final AppointmentService appointmentService;

    @PostMapping("/customers/{customerId}/appointment")
    public ResponseEntity<?> createAppointment(@PathVariable(value = "customerId") Long cus_Id , @RequestBody Appointment appointment){

        System.out.println("cus_Id " + cus_Id);
        return new ResponseEntity<>(appointmentService.create(cus_Id, appointment), HttpStatus.CREATED);

    }

}