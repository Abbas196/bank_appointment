import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Date() {
  const [selectedDate, setSelectedDate] = useState(null)
  
    return (
      <div>
        <p>Choose a date</p>
        <DatePicker 
        selected={selectedDate} 
        onChange={date => setSelectedDate(date)} 
        dateFotmat="mm/dd/yyyy"
        filterDate={date => date.getDay() != 6 && date.getDay() != 0}
        
        />
      </div>
    );
  };

export default Date;