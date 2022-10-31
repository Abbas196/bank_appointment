package com.bank_app.bank_app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import java.util.ArrayList;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long id;

    private String name;
    private String email;

//    @OneToMany(mappedBy = "customer")
//    private List<Appointment> appointments = new ArrayList<>();

}