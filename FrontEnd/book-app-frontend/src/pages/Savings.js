import React from 'react';
import NavigationBar from '../components/Navbar';
function Savings(){
    return(
        <div>
            <NavigationBar />
            <div style={{ display: 'block',
              width: 600, 
              padding: 20 }}></div>
            <h3>
            Savings made simple with our most popular savings account. Automatically set money aside, earn interest and track your savings on the go with our UCM web app!
                </h3>
                <div style={{ display: 'block',
              width: 600, 
              padding: 20 }}></div>
            <h4>
            Tools and resources to help strengthen your savings strategy
            </h4>
            <div style={{ display: 'block',
              width: 600, 
              padding: 10 }}></div>
              <h5>
              >>> Manage Your Budget
              </h5>
              <p>
              Explore how to reach your goals by creating a budget and effectively tracking your spending.
              </p>
              <div style={{ display: 'block',
              width: 600, 
              padding: 10 }}></div>
              <h5>
              >>> Calculate Your Savings
              </h5>
              <p>
              See how saving regularly — even if it's a few dollars a week — can help you reach your goals.
              </p>
        </div>
    );
}

export default Savings;