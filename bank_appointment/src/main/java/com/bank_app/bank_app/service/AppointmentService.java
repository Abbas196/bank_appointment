package com.bank_app.bank_app.service;

import com.bank_app.bank_app.repository.AppointmentRepository;
import com.bank_app.bank_app.entity.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    AppointmentRepository appointmentRepository;

    public Appointment create(Appointment appointment) {
        Appointment ap = null;
        try {
            ap = appointmentRepository.save(appointment);
        } catch (Exception e) {
            System.out.println(e);
        }
        return ap;

    }

    public List<Appointment> getAllAppointments() {
        List<Appointment> ap = null;
        try {
            ap = appointmentRepository.findAll();
        } catch (Exception e) {
            System.out.println(e);
        }
        return ap;

    }

    public Optional<Appointment> getAppointmentById(long id) {
        Optional<Appointment> ap = null;
        try {
            ap = appointmentRepository.findById(id);
        } catch (Exception e) {
            System.out.println(e);
        }
        return ap;

    }

    public Optional<Appointment> getAppointmentByEmail(String email) {
        Optional<Appointment> ap = null;
        try {
            //ap = appointmentRepository.getAppointmentByEmail(email);
        } catch (Exception e) {
            System.out.println(e);
        }
        return ap;

    }

    public Appointment updateAppointment(Appointment appointment) {
        Appointment ap = null;
        try {
            ap = appointmentRepository.save(appointment);
        } catch (Exception e) {
            System.out.println(e);
        }
        return ap;
    }

    public void deleteAppointment(Appointment appointment) {
        Optional<Appointment> ap = null;
        try {
            appointmentRepository.delete(appointment);
        } catch (Exception e) {
            System.out.println(e);
        }

    }
}
