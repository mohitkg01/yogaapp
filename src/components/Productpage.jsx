import React, { useState } from 'react';
import image from '../Assets/imgz.jpg';
import '../Styles/Product.css';
const Productpage = () => {
    const [data,setdata]=useState(1);
    const list=[
        {months:12,
            price:10000,
           offerprice:7000 },
        {months:6,
        price:6000,
       offerprice:4500 },
      {months:3,
        price:4500,
        offerprice:3000},
      {months:1,
      price:2000,
    offerprice:1200}];
    


    const addproduct=((props)=>{
          
            setdata(props.months)
            // console.log(data);
    })
  return (
    <div className="product" id='productid'>
        <div className='p-left'>
            <img src={image} alt="" style={{width:"500px",height:"400px"}} />
        <h1>Whats your yoga for mind</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Consequuntur illum quisquam tenetur beatae vel delectus ullam dolore numquam, voluptas vero.</p>
        </div>
        
        <div className='p-right'>
            <h1>Choose your package</h1>
            <div>
                {list.map((item)=>(
                    <div className='box'>
                    <div>
                    <span>{item.months} months</span>
                    <span>
                    <span style={{textDecoration:"line-through",opacity:"60%"}}>₹ {item.price}</span>
                    <span>₹ {item.offerprice}</span>
                    </span>
                    </div>
                    <button onClick={()=>addproduct(item)} >Buy now</button>
                </div>
                ))} 
            </div>
            <h1>What yoou will get</h1>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Odio inventore, 
                doloribus soluta dolorem mollitia temporibus 
                error impedit eum voluptatum natus.</p>
        </div>
    </div>
  )
}

export default Productpage