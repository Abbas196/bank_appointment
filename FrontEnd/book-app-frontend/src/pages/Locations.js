import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Header from '../components/Header';
import LocationsListDisplay from '../components/LocationsListDisplay';
import Form from 'react-bootstrap/Form';

const Locations = ()=>{
    const location = useLocation();
    console.log(location.state.id);
    console.log(location.state.name);
    console.log(location.state.purpose);
    const navigate = useNavigate();
    const [show,setShow]=useState(false);
    const[Locations, setLocations] = useState({
        zip:"",
        address:"",
    })
    const handleChange = (e) =>{
        const zip = e.target.zip;
        const value = e.target.value;
        setLocations((prev) =>{
          return{...prev,[zip]:value};
        })
    };
    const changeDisplay = (e)=>{

      setShow(true)
      console.log("clicked for changed");
      console.log(show)
  };
  const handleSubmit = (e)=>{

};

    // this is for your reference Aayush so that you can check how to transfer states between the pages.
    //check previous two pages how I have used useState and modified states and forward it to the next page.
    return(
        <><Header />
            <div style={{ display: 'block',
              width: 600, 
              padding: 10 }}></div>
            <h5 style={{ color: 'black' }}>Schedule a meeting: </h5>
            <div style={{ display: 'block',
              width: 600, 
              padding: 5 }}></div>
            <h2 style={{ color: 'black' }}>Choose a branch near you </h2>

            <p>You can schedule a phone meeting if a convenient branch isn't available near you</p>

            <div style={{ display: 'block',
              width: 600, 
              padding: 20 }}></div>

            <h3>Search for a branch</h3>

            <p>We will show upto 10 branches withing 50 mile radius</p>

            <div style={{ display: 'block',
              width: 600, 
              padding: 5 }}></div>

            <p> Please enter your zip code</p>
            
            <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Zip Code :</Form.Label>
                    <Form.Control type="text" name = "zip" onChange={handleChange}/>
                </Form.Group>
            </ Form>
            <br></br>
            <Button variant="primary" type="submit" onClick={changeDisplay}>
            Search
            </Button>
            <div style={{ display: 'block',
              width: 600, 
              padding: 15 }}></div>
            </div>

            {show && <LocationsListDisplay />}
           
            
        </>
        
    )
}

export default Locations;