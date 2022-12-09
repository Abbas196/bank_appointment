import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Alert } from "@mui/material";
import Header from '../components/Header';

const AppointmentDetails = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const customer_id = location.state.customer_id;
    const [name,setName] = useState();
    const[aptId,setAptId] = useState();
    axios.get('http://localhost:8070/customers').then(res =>{

        for(var i = 0;i<res.data.length;i++){
            if(customer_id === res.data[i].id.toString()){
                setName(res.data[i].name);
            }
        }
      });

      const handleHome = (e)=>{
        e.preventDefault();
        navigate('/');
      }

      

    return(
    <>
    <Header  />
    <h1 style={{fontSize:'40px',marginTop:'40px'}}>Appointment Details :</h1>
    <h4 style={{fontSize:'30px',marginTop:'90px'}}>
       Customer Name : {name}
    </h4>
    <h4 style={{fontSize:'30px'}}>
       Location :  {location.state.location}
    </h4>
    <h4 style={{fontSize:'30px'}}>
      Date :   {location.state.date}
    </h4>
    <h4 style={{fontSize:'30px'}}>
        Time : {location.state.time}
    </h4>
    <h4 style={{fontSize:'30px'}}>
      Purpose :   {location.state.purpose}
    </h4>
    <div style={{marginTop:'130px'}}>
    <Button variant="contained" onClick={handleHome}>
      Back to Home Page    
    </Button>
    </div>
    </>
    )
}

export default AppointmentDetails;