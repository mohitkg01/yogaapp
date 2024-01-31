import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect ,logout ,isAuthenticated,user} = useAuth0();
  return (
    <div className="head">
        <div className='h-left'>
            <Link to="home">Yoga for Mind</Link>
        </div>
        <div className='h-right'>
            <Link to="productid">Product</Link>
            <Link to="batchid">Batch</Link>
            {isAuthenticated && <span>{user.nickname}</span>}
            {isAuthenticated ?(<Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Link>)
            :(<Link onClick={() => loginWithRedirect()}>Login</Link>)}
        </div>
    </div> 
  )
}

export default Header