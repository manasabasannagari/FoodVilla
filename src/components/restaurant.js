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
    return (
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
        </div>
    )
}