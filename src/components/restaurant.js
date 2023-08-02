// import { IMG_CDN_URL } from "../config"
// export const RestaurantCard = ({name, avgRating, cuisines, cloudinaryImageId}) => {
//     // const {name, cuisines, cloudinaryImageId, avgRating} = restaurant.data;
//     return (
//         <div className="card">
//             <img src={IMG_CDN_URL+cloudinaryImageId}/>
//             <h3>{name}</h3>
//             <h4>{cuisines.join(", ")}</h4>
//             <h5>{avgRating} stars</h5>
//         </div>
//     )
// }
import { IMG_CDN_URL } from "../config"

export const RestaurantCard = (restaurant) => {



    const {name, cuisines, cloudinaryImageId, avgRating} = restaurant;
    // const user = useContext(UserContext);
    return (
        
        <div className="w-[200px] h-[300px] p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            {/* <h6>{user.name}</h6> */}
        </div>
    )
}