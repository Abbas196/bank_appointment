import LocationsList from '../LocationsList.json';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

 function LocationsListDisplay(){
    const navigate = useNavigate();
    const[Locations, setLocations] = useState({
        zip:"",
        address:"",
    })
    const DisplayData=LocationsList.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.zip}</td>
                    <td>{info.address}</td>
                </tr>
            )
        }
    )
    const handleSubmit = (e)=>{

        console.log("click for submit");
        console.log(e.target.getAttribute('data-zip'))
        /* Change the url or api endpoint*/ 
        //   console.log("Selected location");
        // navigate('/DateTime',{state:Locations}); /* Add the next page url*/
        // })
    };
 
    return DisplayData.map(data=>{
            return <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Zip</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                 {data}
                 <div onClick={handleSubmit} type="
                 submit" data-zip={data.zip}>S</div>
                </tbody>
            </table>
        </div>
        })
 }
 
 export default LocationsListDisplay;