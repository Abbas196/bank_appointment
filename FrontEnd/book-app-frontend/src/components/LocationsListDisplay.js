import React from 'react';
import LocationsList from '../LocationsList.json';
 function LocationsListDisplay(){
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
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Zip</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default LocationsListDisplay;