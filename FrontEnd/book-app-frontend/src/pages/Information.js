import React from 'react';
import './Information.css';
import './Information.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const Information = ()=>{
 
    const navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/schedule`; 
        navigate(path);
      }

    return(
        <>
        <div className='body'>
        <div style={{float:'left', paddingLeft:'20px',paddingTop:'60px'}}>
            <h2>Enjoy !!</h2>
            <h1>Free Services !!</h1>
        </div>
        <div style={{float:'center',paddingTop:'60px',paddingLeft:'400px'}}>
            <h2>New UCM Checking</h2>
            <h2>Customers</h2>
            <h5>open an account and setup a direct deposit</h5>
            <br></br>
            <div style={{ display: "flex" }}>
            <Button variant="danger" size="lg" type="submit" style={{ marginLeft: "auto" }} onClick={routeChange}>
                
                Open An Account
            </Button>
            </div>
        </div>

        </div>
        </>
    );
}

export default Information;