package com.bank_app.bank_app.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name ="Appointments")
public class Appointment {
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhno() {
        return phno;
    }

    public void setPhno(String phno) {
        this.phno = phno;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    //  @NotBlank
    private String date;
    //@NotBlank
    private String time;
    //@NotBlank
    //name,location, purpose of visit,
    private String firstname;
    private String lastname;
    private String email;
    private String phno;

    public  Appointment(){
        super();
    }
    public Appointment(long id, String date, String time, String firstname, String lastname, String email, String phno) {
        super();
        this.id = id;
        this.date = date;
        this.time = time;
        //name
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.phno=phno;
    }





}
