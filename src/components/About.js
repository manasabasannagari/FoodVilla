import { Component } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage.js";
import Profile from './ProfileClass.js'
<<<<<<< HEAD
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
=======

const [value,setValue] = useLocalStorage();
class AboutUs extends Component {
    render(){
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
                {setValue('Manasa')}
                {value}
            </div>
            </>
        )
    }
}
>>>>>>> a92d249ecdf6227c597cfb1b28591eb9488e29da

export default AboutUs;