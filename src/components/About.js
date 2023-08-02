import { Component } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from './ProfileClass.js'
const AboutUs = () => {
    return (
        <>
        <div>
            <h1>This is About Us Page</h1>
            <p>Food Villa is for feeding lots of hungry people over the world....</p>
            <Link to="profile">
                Profile Page
            </Link> 
            <Outlet/>
            <Profile name="Manasa"/>
        </div>
        </>
    )
}

// class AboutUs extends React.Component {
//     render(){
//         return (
//             <>
//             <div>
//                 <h1>This is About Us Page</h1>
//                 <p>Food Villa is for feeding lots of hungry people over the world....</p>
//                 <Link to="profile">
//                     Profile Page
//                 </Link> 
//                 <Outlet/>
//                 <Profile name="Manasa"/>
//             </div>
//             </>
//         )
//     }
// }

export default AboutUs;