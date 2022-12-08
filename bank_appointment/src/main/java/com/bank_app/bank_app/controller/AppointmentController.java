package com.bank_app.bank_app.controller;

import com.bank_app.bank_app.entity.Appointment;
import com.bank_app.bank_app.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin

public class AppointmentController {
    private final AppointmentService appointmentService;

    @PostMapping("/customers/{customerId}/appointments")
    public ResponseEntity<?> createAppointment(@PathVariable(value = "customerId") Long cus_Id, @RequestBody Appointment appointment) {

        System.out.println("cus_Id " + cus_Id);
        return new ResponseEntity<>(appointmentService.create(cus_Id, appointment), HttpStatus.CREATED);

    }

    @PatchMapping("/customers/{customerId}/appointments/{appointmentId}")
    public ResponseEntity<?> updateAppointment(@PathVariable(value = "customerId") Long customerId, @PathVariable(value = "appointmentId") Long appointment_id, @RequestBody Appointment appointment) {

        System.out.println("appointment_id " + appointment_id);
        return new ResponseEntity<>(appointmentService.update(appointment_id, appointment), HttpStatus.OK);
    }

    @DeleteMapping("/customers/appointments/{appointmentId}")
    public void deleteAppointment(@PathVariable(value = "appointmentId") Long appointment_id) {

        System.out.println("appointment_id " + appointment_id);
        appointmentService.delete(appointment_id);
        System.out.println("Appointment Deleted");


    }
}