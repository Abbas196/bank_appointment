import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Locations = ()=>{
    const location = useLocation();
    console.log(location.state.id);
    console.log(location.state.name);
    console.log(location.state.purpose);

    // this is for your reference Aayush so that you can check how to transfer states between the pages.
    //check previous two pages how I have used useState and modified states and forward it to the next page.
    return(
        <>
        </>
    )
}

export default Locations;