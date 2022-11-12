package com.bank_app.bank_app.controller;


import com.bank_app.bank_app.service.LocationsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class LocationController {

    private final LocationsService locationsService;



    @CrossOrigin
    @GetMapping("/Locations")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(LocationsService.findAll(), HttpStatus.OK);
    }

}
