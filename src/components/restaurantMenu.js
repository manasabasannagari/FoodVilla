import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

// import { ShimmerUI } from "./ShimmerUI";

const RestaurantMenu = () => {
    /**How to read a dynamic url params... */
    const {resId} = useParams();
    /**Moved the fetching data logic into custom hook */
    const restaurant = useRestaurant(resId);
    const dispatch = useDispatch();
    const handleAddItem = (name) => {
         dispatch(addItem(name));
    }
    if(!restaurant){return}
   return  (
        <>
        <div>
            <h1>Restaurant Menu with ID: {restaurant.id}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
            <h3>{restaurant.area}</h3>
            <h4>{restaurant.city}</h4>
            <h4>{restaurant.avgRating} stars</h4>
            <h2>Menu:</h2>
            {/* {restaurant} ? {Object.values(restaurant?.menu?.items).map((menuItem)=>(
                <div>{menuItem.name}</div>
            ))}: '' */}
                        <button className="bg-teal-900 rounded-sm text-sm p-2 text-white" onClick={() => handleAddItem(restaurant.name)}>Add Item</button>

            <div>
            </div>
        </div>
        </>
    )
}
export default RestaurantMenu;