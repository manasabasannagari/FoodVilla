import React from "react";
import ReactDOM  from "react-dom/client";
import {HeaderComponent} from './components/header';
import { BodyComponent } from "./components/body";
import { FooterComponent } from "./components/footer";
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