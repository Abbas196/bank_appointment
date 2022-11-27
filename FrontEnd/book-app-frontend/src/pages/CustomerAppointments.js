import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const CustomerAppointments = ()=>{
    const location = useLocation();
    const[appointments,setAppointments] = useState();
    const id = location.state.id;
    const url = 'http://localhost:8070/customers/'+id;
    axios.get(url.toString()).then(res =>{
       for(var i = 0;i<res.data.length;i++){
        console.log(res.data[i]);
       }
    })
    return(
        <>
        <h1>{location.state.id}</h1>
        <h2>{location.state.name}</h2>
        </>
    )
}

export default CustomerAppointments;