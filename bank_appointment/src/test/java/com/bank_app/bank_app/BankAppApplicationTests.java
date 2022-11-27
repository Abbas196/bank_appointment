package com.bank_app.bank_app;

import com.bank_app.bank_app.entity.Appointment;
import com.bank_app.bank_app.entity.Customer;
import com.bank_app.bank_app.repository.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.ArrayList;

@SpringBootTest
class BankAppApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Test
	public void createCustomer(){
		Customer customer = new Customer();
		customer.setId(100L);
		customer.setEmail("springBootTest@hotmail.com");
		customer.setName("Abbas raza");
		customer.setPhoneNumber("812793408");
		customer.setAppointments(new ArrayList<Appointment>());
		customerRepository.save(customer);
		Assert.notNull(customerRepository.findById(12123L).get(), "Customer should be created");
	}

//	@Test
//	void contextLoads() {
//	}

}
