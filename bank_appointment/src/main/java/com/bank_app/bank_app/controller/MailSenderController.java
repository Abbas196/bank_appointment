package com.bank_app.bank_app.controller;

import com.bank_app.bank_app.entity.Appointment;
import com.bank_app.bank_app.entity.Customer;
import com.bank_app.bank_app.repository.AppointmentRepository;
import com.bank_app.bank_app.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.message.SimpleMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class MailSenderController {
    @Autowired
    private JavaMailSender mailsender;
    private final AppointmentRepository appointmentRepository;
    private final CustomerRepository customerRepository;

    @RequestMapping("/sendEmail/{customer_id}/{appointmentId}")
    @ResponseBody
    public void sendEmail(@PathVariable(value = "customer_id") Long customer_id,@PathVariable(value = "appointmentId") Long appointmentID) throws MessagingException {
try{
    SimpleMailMessage message = new SimpleMailMessage();
    Optional<Customer> customer = customerRepository.findById(customer_id);
    Optional<Appointment> appointment = appointmentRepository.findById(appointmentID);
    message.setFrom("fnu.abbas.raza@gmail.com");
    String Location = appointment.get().getLocation();
    String date = appointment.get().getDate();
    String time = appointment.get().getTime();
    String purpose = appointment.get().getPurpose();
    String name = customer.get().getName();
    String bodyText = "Name : "+name +"\n"+"Location : "+Location + "\n"+
            "time : " + time + "\n" +"Date : " + date + "\n"+ "Purpose : "+purpose + "\n";
    message.setTo(customer.get().getEmail());
    System.out.println(customer.get().getEmail());
    message.setText(bodyText);
    message.setSubject("Appointment Details");

    mailsender.send(message);
    System.out.println("email sent successfully");

}
catch(Exception e){
    System.out.println(e.getMessage());
}

    }

}
