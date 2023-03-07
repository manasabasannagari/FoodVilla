import Logo from './logo';
import { useEffect, useState } from 'react';
export const HeaderComponent = () => {

    const [title, setTitle] = useState("Food Villa");
    return (
    <div className="header">
    {Logo}
    <div>
    <h2 id="title" key="heading">{title}</h2>
    </div>
    <button onClick={()=>setTitle("New Food Villa")}>Change Title</button>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>
    );
}

