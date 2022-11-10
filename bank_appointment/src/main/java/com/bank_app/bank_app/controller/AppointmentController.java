package com.bank_app.bank_app.controller;

import com.bank_app.bank_app.service.AppointmentService;
import com.bank_app.bank_app.entity.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class AppointmentController {
    @Autowired
    AppointmentService appointmentService;
    @PostMapping("/appointment")
    public ResponseEntity<Appointment> save(@RequestBody Appointment appointment) {
        System.out.println("schedule " + appointment.getDate());
        Appointment appointment1 = appointmentService.create(appointment);
        if(appointment1!=null){
            return new ResponseEntity<>(appointment1, HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/appointment")
    public ResponseEntity<List<Appointment>> getAll() {

        List<Appointment> appointments = appointmentService.getAllAppointments();
        if(appointments.size()>0){
            return new ResponseEntity<List<Appointment>>( appointments,HttpStatus.OK);
        }else {
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/appointment/{id}")
    public ResponseEntity<Appointment> getApppointmentById(@PathVariable long id) {

        Optional<Appointment> app = appointmentService.getAppointmentById(id);
        // if (app.get()!=null) {
        return app.isPresent()?  new ResponseEntity<>(app.get(), HttpStatus.OK): new ResponseEntity<>(HttpStatus.NOT_FOUND);
        // } else {

        //   return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        // }
    }
    @PutMapping("appointment/{id}")
    public ResponseEntity<Appointment> updateAppoint(@PathVariable long id,@RequestBody Appointment appointment){
        Optional<Appointment> app   = appointmentService.getAppointmentById(id);
        Appointment appointment1 = new Appointment();
        if (app.isPresent()){
            appointment1.setDate(appointment.getDate());
            appointment1.setTime(appointment.getTime());
            appointment1.setFirstname(appointment.getFirstname());
            appointment1.setLastname(appointment.getLastname());
            appointment1.setEmail(appointment.getEmail());
            appointment1.setPhno(appointment.getPhno());

            return new ResponseEntity<>(appointmentService.updateAppointment(appointment),HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    /*
    @DeleteMapping("/appointment/{id}")
        public ResponseEntity<Long> deleteAppointment(@PathVariable Long id) {

            var isRemoved = appointmentService.delete(id);
            if (!isRemoved) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
               return new ResponseEntity<>(id, HttpStatus.OK);
        }
     */
    @DeleteMapping("/appointment/{id}")
    public void deleteAppointment(Appointment appointment){

        appointmentService.deleteAppointment(appointment);
        System.out.println("record deleted");
    }
}




