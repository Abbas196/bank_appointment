import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import { Button, Alert } from "@mui/material";
import Calendar from "react-calendar";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import "react-calendar/dist/Calendar.css";
import axios from 'axios';




const DateTime = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const WEEKDAY_RATE = 100;
    const WEEKEND_RATE = 150;
    const MINUTES_PER_HOUR = 60;
    const FORMATTER = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    
    let weekend = false;
    let selectedDate = "";
    let startTime = "";
    let endTime = "";
    let hours = 0;

    function setStartTime(v) {
        startTime =
          v.hour().toString().padStart(2) + ":" + v.minute().toString().padStart(2);
      }
      
      function setEndTime(v) {
        endTime =
          v.hour().toString().padStart(2) + ":" + v.minute().toString().padStart(2);
      }
      
      function onClick(v, e) {
        if (v.getDay() === 0 || v.getDay() === 6) {
          weekend = true;
        }
      
        selectedDate = FORMATTER.format(v);
      }

      function onSubmit(e) {
        e.preventDefault();
        const time = (startTime.toString()+ "-" + endTime.toString());
        const appointmentData = ({
            id:'',  
            date:selectedDate.toString(),
            time:time,
            location:location.state.location,
            purpose:location.state.purpose,
            customer_id:location.state.customer_id

        });
        const cust_id = location.state.customer_id;
        const url = 'http://localhost:8070/customers/'+cust_id+'/appointments';
        console.log(url);
        axios.post(url,appointmentData).then(res=>{
          appointmentData.id = res.data.id;
          const emailurl = 'http://localhost:8070/sendEmail/'+appointmentData.customer_id+'/'+appointmentData.id;
            axios.get(emailurl).then(res =>{
              console.log('email sent successfully');
            })
            navigate('/AppointmentDetails',{state:appointmentData});
        })
        
      }

    return(
    <>
    <Header />
    <br></br>
    <div>
      <h3>Choose a date to book the appoinment</h3>
      <div style={{ display: 'block',
              width: 600, 
              padding: 10 }}></div>

      <Calendar onClickDay={onClick} />
      <div style={{ display: 'block',
              width: 600, 
              padding: 10 }}></div>

      <h3>Choose the Start and end time</h3>
      <div style={{ display: 'block',
              width: 600, 
              padding: 5 }}></div>

      <h3> Start </h3>
      <TimePicker
        placeholder="Select Time"
        use12Hours
        minuteStep={15}
        showSecond={false}
        focusOnOpen={true}
        format="hh:mm A"
        onChange={(e) => setStartTime(e)}
      />
      <h3> End </h3>
      <TimePicker
        placeholder="Select Time"
        use12Hours
        minuteStep={15}
        showSecond={false}
        focusOnOpen={true}
        format="hh:mm A"
        onChange={(e) => setEndTime(e)}
      />
      <br />
      <br />
      <Button variant="contained" onClick={(e) => onSubmit(e)}>
        Book Appointment
      </Button>
      <br />
      <br />
      <div id="output"></div>
      <br />
    </div>
    </>
    )
}

export default DateTime;