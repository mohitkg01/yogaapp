import React, { useEffect, useState } from 'react'
import imz from '../Assets/img.jpg';
import '../Styles/Batch.css'
import moment from 'moment';

const Batch = (props) => {
  // console.log(props);
const [selectDate,setDate]=useState(null);
const [selectedTime,setSelectedTime]=useState(null);
const [dateOption,setDateOption]=useState([]);


const timeOption=["5:00-6:00 AM",
                  "6:00-7:00 AM",
                  "7:00-8:00 AM",
                  "8:00-9:00 AM",
                  "9:00-10:00 AM",
                  "4:00-5:00 PM",
                  "5:00-6:00 PM",
                  "6:00-7:00 PM",
                  "7:00-8:00 PM",
                  "8:00-9:00 PM" ];

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  }

  useEffect(()=>{
    const start = moment();
    const end=moment().add(15,'d');
    const dates=[];
    let currentDate=start.clone();
    // console.log(currentDate);

    while(currentDate.isBefore(end)){
      dates.push(currentDate.format('YYYY-MM-DD'));
     currentDate.add(1,'d');
    }
    setDateOption(dates);
  },[]);

  const generateDateoption=()=>{
    return dateOption.map((date,idx)=>(
      <option value={date} key={idx}>
        {date}
      </option>
    ))
  }

  const generateTimeOption=()=>{
    return timeOption.map((time,idx)=>(
      <option value={time} key={idx}>
        {time}
        </option>
    ))
  };

  const onSubmit=(()=>{
    if (!selectedTime && !selectDate) {
      alert("Please select a date and time");
    }
    else if (!selectedTime) {
      alert("Please select a time");
    }
    else  if (!selectDate) {
      alert("Please select a date");
    } 
     else {
      alert("Response Submitted");
    }
  })
  return (
    <div className="batch" id="batch">
      <div><img src={imz} alt="" style={{height:"400px"}} /></div>
          <h1>What is in your mind</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Saepe id ut inventore nemo suscipit, perferendis nesciunt numquam. Laudantium, excepturi earum!</p>
         <div className='time'>
           <h1>{props.propsValue ? `${props.propsValue.months} Months` : '12 Months'}</h1>
          <span>
          <span style={{textDecoration:"line-through",opacity:"60%"}}> {props.propsValue ? `₹${props.propsValue.price}` :'₹ 10000'} </span>
          <span> {props.propsValue ? `₹${props.propsValue.offerprice}`: "₹ 7000" }</span>
            </span>
            <span>
          <div className='date'>
          <p>Pick start date</p>
          <select value={selectDate} onChange={handleDateChange} >
            <option value="">
              Select Date
            </option>
            {generateDateoption()}
          </select>
        </div> 
        <div className="slot">
          <p>Select time slot</p>
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">
              Select Time Slot
            </option>
           {generateTimeOption()}
          </select>
        </div>
            </span>
        </div>
        <button onClick={onSubmit}>Response</button>
    </div>
  )
}

export default Batch