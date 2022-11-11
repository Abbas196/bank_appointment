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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
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


    public String getPurposeofvisit() { return purposeofvisit; }
    public void setPurposeofvisit(String purposeofvisit) {
        this.purposeofvisit = purposeofvisit;
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
    private String name;
    private String location;
    private String email;
    private String phno;
    private String purposeofvisit;

    public  Appointment(){
        super();
    }
    public Appointment(long id, String date, String time, String name, String location, String email, String phno,String purposeofvisit) {
        super();
        this.id = id;
        this.date = date;
        this.time = time;
        this.name=name;
        this. purposeofvisit= purposeofvisit;
        this.location=location;
        this.email=email;
        this.phno=phno;
    }





}
