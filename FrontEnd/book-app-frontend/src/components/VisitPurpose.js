import react from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

const VisitPurpose = ()=>{
    return(
        <>
        <h4 style={{color:'red'}}>Special Message :</h4>
        <p style={{fontSize:'small',paddingBottom:'30px'}}>We’re scheduling meetings by phone and in person, based on your preference.</p>
        
<form method='post'>
    <label for='purpose' style={{fontSize:'large'}}>Purpose of Visit ?</label>
    <br></br>
    <select name='purpose' id='purpose' style={{backgroundColor:'lightblue',marginBottom:'40px'}}>
        <option value='openAccount'>Open an Account</option>
        <option value='representative'>Meet a representative</option>
        <option value='deposit'>Cash Deposit</option>
    </select>
    <br></br>
    <input type='radio' name='scheduling' id='scheduling'/>
    <label for='scheduling'>Schedule a meeting</label><br></br>
    <input type='radio' name='manage' id='manage'/>
    <label for='manage'>Manage Existing Appointment</label><br></br>
    <input type='submit' value='Next' style={{backgroundColor:'lightblue', width:'150px'}} />
</form>
        </>
    );
}

export default VisitPurpose;