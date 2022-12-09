import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import { Button, Alert } from "@mui/material";
import locationList from './LocationList.json';
const Locations = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const [show,setShow]=useState(false);
    console.log(locationList);
    const[Locations, setLocations] = useState({
        zip:"",
        address:"",
    });
    const appointmentData = ({
        customer_id : location.state.id,
        purpose:location.state.purpose,
        location:""
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('/dateTime',{state:appointmentData});
    }
    const selectLocation = (location,zip)=>{
        console.log(location);
        console.log(zip);
        const address = location + ","+zip;
        appointmentData.location = address;
        navigate('/dateTime',{state:appointmentData});
    }
     const locationListEntity=locationList.map(
                (info)=>{
                    return(
                        <tr>
                            <td>{info.address}</td>
                            <td>{info.zip}</td>
                            <td><Button variant="contained" size='sm' onClick={()=>selectLocation(info.address,info.zip)}>select Location</Button>
                            </td>
                        </tr>
                    )
                }
            );

    // this is for your reference Aayush so that you can check how to transfer states between the pages.
    //check previous two pages how I have used useState and modified states and forward it to the next page.
    return(
        <>
        <Header />
        <table style={{width:'100%',overflow:'auto'}}>
                <thead>
                    <tr>
                    <th>Location</th>
                    <th>Zip</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {locationListEntity}
                    
                </tbody>
            </table>
        </>
    )
}

export default Locations;