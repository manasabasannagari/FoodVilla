import { useEffect , useState} from "react";

const useRestaurant = (resId) => {
const [restaurant, setRestaurant] = useState();
    //get data from API

    // return restaurant data
    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        // const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?menuId="+resId);
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5071128&lng=78.35791119999999&restaurantId="+resId+"&submitAction=ENTER")
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId="+resId)
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5071128&lng=78.35791119999999&"+resId+"=39782&submitAction=ENTER");

        const json = await data.json();
        console.log(json.data.cards[0].card.card.info)
      
        // setRestaurant(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card ?.card.itemCards ||
        //     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card ?.card.itemCards ||
        //          json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards);
        setRestaurant(json.data);
    }
    return restaurant;
};
export default useRestaurant;
