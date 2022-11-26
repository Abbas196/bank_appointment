import React from 'react';
import {useLocation} from 'react-router-dom';

const Locations = ()=>{
    const location = useLocation();
    return(
        <>
        <h1>{location.state.name}</h1>
        </>
    )
}

export default Locations;