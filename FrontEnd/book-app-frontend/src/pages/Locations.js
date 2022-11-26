import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Locationslist from './Locationslist';

function Locations(){
    return(
        <div>
            <Router>
            
                    <Locationslist />
            </Router>
        </div>
    )
}

export default Locations;