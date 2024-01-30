import React from 'react'
import imz from '../Assets/img.jpg';
import '../Styles/Batch.css'
const Batch = () => {
  return (
    <div className="batch" id="batchid">
      <div><img src={imz} alt="" style={{height:"400px"}} /></div>
      <h1>What is in your mind</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Saepe id ut inventore nemo suscipit, perferendis nesciunt numquam. Laudantium, excepturi earum!</p>
         <div>
            <span>3 months</span>
            <span>
            <span style={{textDecoration:"line-through",opacity:"60%"}}>₹ 5000</span>
           <span>₹ 3000</span>
            </span>
         <p>Pick start date</p>
         <p>date</p>
         <p>date list</p>
         <div>Select the slot</div>
         <select name="" id="">
         <option value="">5   9</option>
         <option value="">10000</option>
         </select>
        </div>
    </div>
  )
}

export default Batch