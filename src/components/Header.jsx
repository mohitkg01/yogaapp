import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
const Header = () => {
  return (
    <div className="head">
        <div className='h-left'>
            <Link to="home">Yoga for Mind</Link>
        </div>
        <div className='h-right'>
            <Link to="productid">Product</Link>
            <Link to="batchid">Batch</Link>
            <Link>Login</Link>
        </div>
    </div>
  )
}

export default Header