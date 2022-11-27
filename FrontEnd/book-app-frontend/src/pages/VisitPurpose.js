import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const VisitPurpose = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const emailAddress = location.state.email;
    console.log(emailAddress);
    const options = ["Open an account", "Meet a representative", "Cash Deposit"];
    const[purpose,setPurpose] = useState(options[0]);
    const[Id,setId] = useState('0');
    axios.get('http://localhost:8070/customers').then(res =>{
        for(var i = 0;i<res.data.length;i++){
            if(res.data[i].email === emailAddress){
               setId((res.data[i].id).toString());
            }
        }
    });
    const customerData = ({
        id: Id,
        name:location.state.name,
        email:location.state.email,
        phoneNumber:location.state.phoneNumber,
        purpose:purpose
    });
    console.log(customerData);
    const SubmitForm = (e)=>{
        e.preventDefault();
        navigate('/locations',{state:customerData});
    }
    return(
        <>
        <Header />
        <h3 style={{color:'red'}}>Special Message : </h3>
        <h6>We're scheduling meetings by phone and in person, based on your preference</h6>
        <form  onSubmit={SubmitForm}>
        <select 
         value={purpose} 
         onChange={e => setPurpose(e.target.value)}>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
        <br></br>
        <Button type='submit' variant="primary" size="sm" style={{marginTop:'20px'}}>Next</Button>
        </form>
        <Button type='submit' variant="primary" size="sm" style={{marginTop:'20px',marginLeft:'250px'}}>Click here to Manage an Existing Appointment</Button>
        </>
    )
}

export default VisitPurpose;