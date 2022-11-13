package com.bank_app.bank_app.controller;


import com.bank_app.bank_app.repository.LocationsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class LocationController {


    @Autowired
    private LocationsRepository repo;



    @CrossOrigin
    @GetMapping("/Locations")
    public ResponseEntity<?> findAll(){return new ResponseEntity<>(repo.findAll(), HttpStatus.OK);
    }

}
