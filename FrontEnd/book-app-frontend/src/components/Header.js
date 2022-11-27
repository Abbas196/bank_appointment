import logo from '../bank_logo.png';
import React from 'react';
import './header.css';
const Header = ()=>{
    return(
<div class="top-header">
<img src={logo} width = '250' height = '120' alt = 'img not available' />
</div>
    )
}

export default Header;