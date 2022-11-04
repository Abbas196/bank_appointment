import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Checking from './pages/Checking';
import logo from './bankLogo.png';


function App() {
return (
	<Router>
  <img src={logo} width = '250' height = '120' alt = "Logo"/>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Schedule} />
    <Route path='/schedule' component = {Checking} />
	</Routes>
	</Router>
);
}

export default App;
