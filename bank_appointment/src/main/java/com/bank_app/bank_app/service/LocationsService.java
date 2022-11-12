package com.bank_app.bank_app.service;


import com.bank_app.bank_app.entity.Locations;
import com.bank_app.bank_app.repository.LocationsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;





@Service
@RequiredArgsConstructor
public class LocationsService {



    private static LocationsRepository locationsRepository;
    @Transactional
    public Locations create(Locations locations){
        return locationsRepository.save(locations);
    }


    @Transactional
    public static List<Locations> findAll(){

        return locationsRepository.findAll();
    }
}
