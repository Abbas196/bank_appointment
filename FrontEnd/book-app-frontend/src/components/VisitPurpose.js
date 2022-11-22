import react from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

const VisitPurpose = ()=>{
    return(
        <>
        <form>
        <h2>Purpose of visit ??</h2>
        <select>
            <option value="account_opening">Open an account</option>
            <option value="representative">Meet a representative</option>
            <option value="deposit">Cash Deposit</option> 
        </select> <br></br><br></br>
        <input type="submit" value= "next" />
        </form>
        </>
    );
}

export default VisitPurpose;