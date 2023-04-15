import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import {HeaderComponent} from './components/header';
import { BodyComponent } from "./components/body";
import { FooterComponent } from "./components/footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import Cart from "./components/cart";
import RestaurantMenu from "./components/restaurantMenu";
import Profile from "./components/ProfileClass";
import { ShimmerUI } from "./components/ShimmerUI";
//Importing insta mart in a single bundle:
// import InstaMart from "./components/instamart";

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
// Firstly build app:

//importing instamart in a lazy way
const InstaMart = lazy(()=>import("./components/instamart"));
const AppLayout = () => {
    return (
<>
        <HeaderComponent/>
        {/* Outlet where I want to fill in different pages */}
        <Outlet/>
        <FooterComponent/>
</>
    );
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'',
                element:<BodyComponent/>
            },
            {
                path:'/about',             // localhost:1234/about, here / or without / works
                element:<AboutUs/>,
                children:[{
                    path:'profile',     // localhost:1234/about/profile  : Its relative path don't give slash
                    element:<Profile/>
                }]
            },{
                path:'/contact',      // localhost:1234/contact
                element:<Contact/>
            },{
                path:'/cart',
                element:<Cart/>
            },{
                path:'/restaurantMenu/:resId',
                element: <RestaurantMenu/>
            }
            ,{
                path:'/instamart',
                element:<Suspense fallback={<ShimmerUI/>}>
                          <InstaMart/>
                        </Suspense>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)