import Logo from './logo';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline.js';
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux';
import {store} from './../utils/store';
// import { Link} from "react-router-dom";
export const HeaderComponent = () => {

    const cartItems = useSelector(store => store.cart.items);

    const authenticateUser = () => {
        /**
         * API call to check authentication
         * if API returns sucess return true else return false
         */
        return true;
    }

    const {user,setUser} = useContext(UserContext);
    const [title, setTitle] = useState("Food Villa");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-100 lg:bg-yellow-100">
    {Logo}
    <div>
    <h2 id="title" key="heading">{title}</h2>
    </div>
    <div className="nav-items">
        <ul className="flex py-10 ">
            <Link  className="px-2 text-blue-600 visited:text-purple-600" to='/'>Home</Link>
            <Link className="px-2 text-blue-600 visited:text-purple-600" to='/about'>About</Link>
            <Link className="px-2 text-blue-600 visited:text-purple-600" to='/contact'>Contact</Link>       
            <Link className="px-2  text-blue-600 visited:text-purple-600" to='/instamart'>Instamart</Link>
            <Link className="px-2 text-blue-600 visited:text-purple-600" to='/cart'>Cart - {cartItems.length}</Link>
        </ul>
    </div>
   
     <h1 className='font-bold'>{user.name} <br/>{isOnline ? 'Online💚':'Away❤️'}<br></br>
     {
        isLoggedIn ?  <button onClick={()=>setIsLoggedIn(true)}>Login</button>: <button onClick={()=>setIsLoggedIn(true)}>logout</button>
    }
    </h1>


    <input value={user.name} onChange={(e)=>setUser({
        name: e.target.value,
        email:"newemail@gmail.com"
    })}></input>


    </div>
    );
}