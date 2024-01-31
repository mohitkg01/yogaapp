import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect ,logout ,isAuthenticated,user} = useAuth0();
  return (
    <div className="head">
        <div className='h-left'>
            <Link to="homepage">Yoga for Mind</Link>
        </div>
        <div className='h-right'>
            <Link to="product">Product</Link>
            <Link to="batch">Batch</Link>
            {isAuthenticated ?(<Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Link>)
            :(<Link onClick={() => loginWithRedirect()}>Login</Link>)}
             {isAuthenticated && <span>{user.nickname}</span>}
        </div>
    </div> 
  )
}

export default Header