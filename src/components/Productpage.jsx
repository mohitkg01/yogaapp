import React from 'react';
import image from '../Assets/imgz.jpg';
import '../Styles/Product.css';
import { Link } from 'react-router-dom';
const Productpage = (prop) => {

    // const [data,setdata]=useState(1);
    const list = [
      { months: 12, price: 10000, offerprice: 7000 },
      { months: 6, price: 6000, offerprice: 4500 },
      { months: 3, price: 4500, offerprice: 3000 },
      { months: 1, price: 2000, offerprice: 1200 }
  ];
    
    const addproduct=((props)=>{
            // setdata(props.months)
            // console.log(props);
            prop.getData(props);
    })
  return (
    <div className="product" id='product'>
        <div className='p-left'>
            <img src={image} alt="" style={{height:"400px"}} />
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
                    <Link to="/batch">
                    <button onClick={()=>addproduct(item)} >Buy now</button></Link>
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