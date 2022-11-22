import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Savings from './pages/Savings';
import logo from './bank_logo.png';
import Home from './pages/Home';

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
        </Routes>
      </Container>
    </div>
  </>
    
);
}

export default App;
