import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import Table from 'react-bootstrap/Table';
import '../App.css';
import Button from 'react-bootstrap/Button';


const CustomerAppointments = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const id = location.state.id;
    const url = 'http://localhost:8070/customers/' + id;
    useEffect(() => {
        axios.get(url.toString()).then(res => {
            console.log(res.data);
            setAppointments(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    const handleHome = (e)=>{
      e.preventDefault();
      navigate('/');
    }
    const deleteAppointment = (aptId)=>{
      const appointmentId = aptId;
      const url = 'http://localhost:8070/customers/appointments/'+appointmentId;
      axios.delete(url).then(res =>{
        console.log("Appointment Deleted");
        window.location.reload(true);
      });
      
    }

    const reSchedule = (aptId)=>{
      const appointmentId = aptId;
      const url = 'http://localhost:8070/customers/appointments/'+appointmentId;
      axios.delete(url).then(res =>{
        console.log("Appointment Deleted");
        navigate('/Schedule');
        
      });
      
    }

     const DisplayData=appointments.map(
              (info)=>{
                  return(
                      <tr>
                          <td>{info.purpose}</td>
                          <td>{info.location}</td>
                          <td>{info.date}</td>
                          <td>{info.time}</td>
                          <td><Button variant="danger" size='sm' onClick={()=>deleteAppointment(info.id)}>Cancel app</Button>
                          <Button variant="primary" style={{marginRight:'auto'}} size='sm' onClick={()=>reSchedule(info.id)}>Reschedule app</Button>
                          </td>
                      </tr>
                  )
              }
          );

    return (
      <>
      <Header />
            <table>
                <thead>
                    <tr>
                    <th>Purpose</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>

<br></br>
<Button variant="primary" onClick={handleHome}>
      Back to Home Page    
    </Button>
         </>
    )
}

export default CustomerAppointments;