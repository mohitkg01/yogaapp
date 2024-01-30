import React from 'react'
import image from '../Assets/imgz.jpg'
import '../Styles/Product.css';
const Productpage = () => {
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
                <div className='box'>
                    <div>
                    <span>6 months</span>
                    <span>
                    <span  style={{textDecoration:"line-through",opacity:"60%"}}>₹ 6000</span>
                    <span>₹ 4500</span>
                    </span>
                    </div>
                    <button>Buy now</button>
                </div>
                <div className='box'>
                    <div>
                    <span>3 months</span>
                    <span>
                    <span style={{textDecoration:"line-through",opacity:"60%"}}>₹ 5000</span>
                    <span>₹ 3000</span>
                    </span>
                    </div>
                    <button>buy now</button>
                </div>
                <div className='box'>
                    <div>
                    <span>1 months</span>
                    <span>
                    <span  style={{textDecoration:"line-through",opacity:"60%"}}>₹ 2000</span>
                    <span>₹ 1200</span>
                    </span>
                    </div>
                    <button>buy now</button>
                </div>
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