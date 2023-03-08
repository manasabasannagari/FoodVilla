import Logo from './logo';
import { useEffect, useState } from 'react';
export const HeaderComponent = () => {

    const authenticateUser = () => {
        /**
         * API call to check authentication
         * if API returns sucess return true else return false
         */
        return true;
    }
    const [title, setTitle] = useState("Food Villa");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
    <div className="header">
    {Logo}
    <div>
    <h2 id="title" key="heading">{title}</h2>
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
    {
        isLoggedIn ?  <button onClick={()=>setIsLoggedIn(true)}>Login</button>: <button onClick={()=>setIsLoggedIn(true)}>logout</button>
    }
    
    </div>
    );
}

