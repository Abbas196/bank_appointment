import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Date from '../components/Date';
import Time from '../components/Time';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DateTime = ()=>{
    return(
        <>
        <Header />
        <div style={{ display: 'block',
              width: 600, 
              padding: 20 }}></div>
        <h2>When should we meet?</h2>

        <div style={{ display: 'block',
              width: 600, 
              padding: 20 }}></div>
        
        <p>Please select the date and time below</p>

        <div style={{ display: 'block',
              width: 600, 
              padding: 20 }}></div>
        <Container>
        <Row>
            <Col md={4}>
                <Date />
             </Col>
            <Col md={{ offset: 0 }}>
            <p> Please select Time</p>
                <Time />
            </Col>
        </ Row>
        </Container>
        </>
    )
};

export default DateTime;