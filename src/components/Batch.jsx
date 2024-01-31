import React, { useState } from 'react'
import imz from '../Assets/img.jpg';
import '../Styles/Batch.css'
import moment from 'moment';



const Batch = () => {
  let intime = "12:00 Pm"
  let outtime = "08:00 Pm"
  const [selectDate,setDate]=useState(null);
  const [selectedTime,setSelectedTime]=useState(null);
  const [result,setResult]=useState([]);

const intervals=((startString,endString)=>{
  var start = moment(startString, 'hh:mm a');
    var end = moment(endString, 'hh:mm a');
    start.minutes(Math.ceil(start.minutes() / 60) * 60);

    var current = moment(start);

    while (current <= end) {
      if (result.includes(current.format('hh:mm a'))) {
        return null
      }
      else {
        result.push(current.format('hh:mm a'));
        current.add(60, 'minutes');
      }
    }


    return result;
})
intervals(intime,outtime);
  const generateDateoption=()=>{
    const currentDate=new Date();
    const dateOption=[];

    for(let i=0;i<15;i++){
      const futureDate=new Date(currentDate);
      futureDate.setDate(currentDate.getDate()+i);
      const formatDate=futureDate.toLocaleDateString('en-US',{weekday:'short',monty:'short',day:'numeric'});
      dateOption.push(<li key={i} value={formatDate}
      on>{formatDate}</li>)
    }
    return dateOption;
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
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
            <option value="" disabled>
              Select Date
            </option>
            {generateDateoption()}
          </select>
        </div> 
        <div className="slot">
          <h1>Select time slot</h1>
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="" disabled>
              Select Time Slot
            </option>
            {result.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
            </span>
        </div>
        <button>Submit</button>
    </div>
  )
}

export default Batch