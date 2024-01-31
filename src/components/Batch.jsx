import React, { useEffect, useState } from 'react'
import imz from '../Assets/img.jpg';
import '../Styles/Batch.css'
import moment from 'moment';
const Batch = () => {
const [selectDate,setDate]=useState(null);
const [selectedTime,setSelectedTime]=useState(null);
const [dateOption,setDateOptiom]=useState([]);

const timeOption=["5:00-6:00 AM",
                  "6:00-7:00 AM",
                  "7:00-8:00 AM",
                  ,"8:00-9:00 AM",
                  "9:00-10:00 AM",
                  "4:00-5:00 PM",
                  "5:00-6:00 PM",
                  "6:00-7:00 PM",
                  "7:00-8:00 PM",
                  ,"8:00-9:00 PM" ];

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);}

  useEffect(()=>{
    const start=moment();
    const end=moment().add(15,'d');
    const dates=[];
    let currentDate=start.clone();
    console.log(currentDate);

    while(currentDate.isBefore(end)){
      dates.push(currentDate.format('YYYY-MM-DD'));
     
    }
    setDateOptiom(dates);
  },[]);

  const generateDateoption=()=>{
    return dateOption.map((date)=>(
      <option value={date}>
        {date}
      </option>
    ))
  }

  const generateTimeOption=()=>{
    return timeOption.map((time)=>(
      <option value={time} >
        {time}
        </option>
    ))
  };
  
  return (
    <div className="batch" id="batch">
      <div><img src={imz} alt="" style={{height:"400px"}} /></div>
          <h1>What is in your mind</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Saepe id ut inventore nemo suscipit, perferendis nesciunt numquam. Laudantium, excepturi earum!</p>
         <div className='time'>
            <h1>6 months</h1>
            <span>
            <span style={{textDecoration:"line-through",opacity:"60%"}}>₹ 5000</span>
            <span>₹ 5000</span>
            </span>
            <span>
          <div className='date'>
          <h1>Pick start date</h1>
          <select value={selectDate} onChange={handleDateChange}>
            <option value="">
              Select Date
            </option>
            {generateDateoption()}
          </select>
        </div> 
        <div className="slot">
          <h1>Select time slot</h1>
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">
              Select Time Slot
            </option>
           {generateTimeOption()}
          </select>
        </div>
            </span>
        </div>
        <button>Submit</button>
    </div>
  )
}

export default Batch