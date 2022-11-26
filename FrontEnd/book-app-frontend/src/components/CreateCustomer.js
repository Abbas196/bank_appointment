import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCustomer = ()=>{
  const navigate = useNavigate();
  const[customer, setCustomer] = useState({
    name:"",
    email:"",
    phone:""

  })
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setCustomer((prev) =>{
      return{...prev,[name]:value};
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(customer);
    axios.post('http://localhost:8070/customers',customer).then(res =>{
      console.log("created a new customer");
      navigate('/locations',{state:customer});
    });
  }
  return(
    <>
    <Header />

    <h4 style={{marginLeft:'30px'}}>Schedule a meeting</h4>
    <p>-------------------------------------------------------------------------------------------------

    -----------------------------------------------------------------------------------------------------
    </p>
    <div style={{ display: 'block',
              width: 600, 
              padding: 30 }}>
  <h4>Tell us about yourself</h4>
  <Form onSubmit={handleSubmit}>
  <Form.Group>
      <Form.Label>Enter your Name :</Form.Label>
      <Form.Control type="text" name = "name" onChange={handleChange}/>
    </Form.Group>
    <Form.Group>
      <Form.Label>Enter your email address:</Form.Label>
      <Form.Control type="email" name = "email"  onChange={handleChange}/>
    </Form.Group>
    <Form.Group>
      <Form.Label>Enter Phone Number:</Form.Label>
      <Form.Control type="text" name = "phone"   onChange={handleChange}/>
    </Form.Group>
    <br></br>
    <Button variant="primary" type="submit">
       Submit
    </Button>
  </Form>
</div>
    </>
  )
}

export default CreateCustomer;
