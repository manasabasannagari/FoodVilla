import React from "react";
import ReactDOM  from "react-dom/client";
import img from "./assets/app-logo.png";
import restaurantMockData from './cards.json'
 /** Header
            Logo
            Nav items (Right)
            Cart

        Body
            Search
            Restaurant list 
                Restautant Card 
                    Image
                    Name
                    Rating
                    Cusines - North india south indian
                    Price
                    Address  

        Footer
            Locations
            Links
            copywrites
         */ 
    const Logo = (
        <a href="/">
        <img alt="logo" className="logo" src={img}/>
        </a>
     )
const Title = (
    <div>
    <h2 id="title" key="heading">Food Villa</h2>
    </div>
);

const HeaderComponent = () => {
    return (
    <div className="header">
    {Logo}
    {Title}
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
//config Driven UI
const config = restaurantMockData;
// const restaurantList = [{
//     name: {restaurantMockData[0].data?.name},
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfhgoualaihzkpkimssq",
//     cusines: {restaurantMockData[0].data?.cuisines},
//     rating:"4.2"
// }]
const RestaurantCard = ({name, avgRating, cuisines, cloudinaryImageId}) => {
    // const {name, cuisines, cloudinaryImageId, avgRating} = restaurant.data;
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        +cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
        </div>
    )
}
 
const BodyComponent = () => {
return (
    <div className="main-container">
    <div className="restaurant-list">
       {
        restaurantMockData.map((res)=><RestaurantCard {...res.data}/>)
       }
    <RestaurantCard {...restaurantMockData[0].data} hello="world"/>
    {/* <RestaurantCard {...restaurantMockData[1].data}/>
    <RestaurantCard {...restaurantMockData[2].data}/>
    <RestaurantCard {...restaurantMockData[3].data}/>
    <RestaurantCard {...restaurantMockData[4].data}/>
    <RestaurantCard {...restaurantMockData[5].data}/>
    <RestaurantCard {...restaurantMockData[6].data}/>
    <RestaurantCard {...restaurantMockData[7].data}/>
    <RestaurantCard {...restaurantMockData[8].data}/>
    <RestaurantCard {...restaurantMockData[9].data}/>
    <RestaurantCard {...restaurantMockData[10].data}/>
    <RestaurantCard {...restaurantMockData[11].data}
    />
    <RestaurantCard {...restaurantMockData[12].data}/>
    <RestaurantCard {...restaurantMockData[13].data}/>
    <RestaurantCard {...restaurantMockData[14].data}/> */}

    </div>
    </div>
);
}
const FooterComponent = () => {
    return (<h4>Footer</h4>);
}

// Firstly build app:
const AppLayout = () => {
    return (
<>
    
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
    
</>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)