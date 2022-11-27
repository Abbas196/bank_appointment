import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Savings from './pages/Savings';
import Home from './pages/Home';
import VisitPurpose from './pages/VisitPurpose';
import Locations from './pages/Locations';
import CustomerAppointments from './pages/CustomerAppointments';

function App() {
return (
  <>
  <div>
      <Container>
        <Routes>
        <Route path='/' element = {<Home  />} exact />
        <Route path="/savings" element={<Savings/>} exact />
        <Route path="/Schedule" element={<Schedule/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/VisitPurpose" element={<VisitPurpose />} exact />
        <Route path="/locations" element={<Locations />} exact />
        <Route path="/CustomerAppointments" element={<CustomerAppointments />} exact />
        
        </Routes>
      </Container>
    </div>
  </>
    
);
}

export default App;
