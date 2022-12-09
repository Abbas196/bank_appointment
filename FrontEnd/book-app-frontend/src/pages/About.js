import React from 'react';
import NavigationBar from '../components/Navbar';

function About(){
return (
	<div>
		<NavigationBar />
		<div style={{ display: 'block',
              width: 600, 
              padding: 20 }}></div>
       <h3>This is a webapp built to book an appointment at UCM bank</h3>
       <div style={{ display: 'block',
              width: 600, 
              padding: 10 }}></div>
       <p>We have used various technologies like Spring Boot for backend, Rest Api to connect our front end and backend
        , React JS for Front End and SQL Database to capture and display the data.
       </p>
       <p>
        The main goal of this project is to learn how to book an appointment by a user if he/she want's to open an account,
        make changes to an existing account or deposit cash.
       </p>
       <p>
        We have taken the basic layout idea from Chase Bank and tried to replicate the same.
       </p>
       <p>
        The project proved a great source of learning and helped us accomplish the basic functionlity of a Full Stack Application
        and how it functions.
       </p>
       <p>
        We are grateful to have worked on this project as a group and Thank Professor Kang for all his efforts and input.
       </p>
       <p>
        Hope you like our work.
       </p>
       <div style={{ display: 'block',
              width: 600, 
              padding: 10 }}></div>
       <h3>
        Thank You!
       </h3>
	</div>
);
};

export default About;
