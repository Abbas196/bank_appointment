package com.bank_app.bank_app.service;

import com.bank_app.bank_app.entity.Appointment;
import com.bank_app.bank_app.entity.Customer;
import com.bank_app.bank_app.repository.CustomerRepository;
import org.junit.jupiter.api.*;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;

public class CustomerServiceTest {


	private static CustomerService customerService;


	@BeforeAll
	public static void create() {
		CustomerRepository mockCustomerRepository;
		Customer customer;
		Appointment appointment, appointment1, appointment2;
		mockCustomerRepository = Mockito.mock(CustomerRepository.class);


		appointment = new Appointment(1l, "Lee's Summit", "04:52", "11-01-2022", "Appointment with Manager", null);
		appointment1 = new Appointment(1l, "Richardson", "03:56", "31-12-2022", "Want to apply for new passbook", null);
		appointment2 = new Appointment(1l, "Irving", "09:00", "04-07-2022", "Want to meet clerk", null);

		customer = new Customer(21212l, "Jessica", "jessica@hotmail.com", 56781234567l, List.of(appointment1, appointment2, appointment));


		Mockito.when(mockCustomerRepository.findById(1l)).thenReturn(Optional.of(customer));

		customerService=new CustomerService(mockCustomerRepository);

	}


	@Test
	public void testGetAppointmentList(){
		List<Appointment> appointments;

		appointments=customerService.getAppointmentList(1l);

		Assertions.assertEquals(3,appointments.size());

	}

	@AfterEach
	public void destroy(){
		customerService=null;
	}

}