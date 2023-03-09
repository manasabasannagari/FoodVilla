import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
// import { ShimmerUI } from "./ShimmerUI";

const RestaurantMenu = () => {
    /**How to read a dynamic url params... */
    const {resId} = useParams();

    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    const [restaurant, setRestaurant] = useState(null);
    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?menuId="+resId);
        const json = await data.json();
        console.log(json)
        setRestaurant(json.data);
    }
    if(!restaurant){return}
   return  (
        <>
        <div>
            <h1>Restaurant Menu with ID: {resId}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
            <h3>{restaurant.area}</h3>
            <h4>{restaurant.city}</h4>
            <h4>{restaurant.avgRating} stars</h4>
            <h2>Menu:</h2>
            {Object.values(restaurant?.menu?.items).map((menuItem)=>(
                <div>{menuItem.name}</div>
            ))}
        </div>
        </>
    )
}
export default RestaurantMenu;