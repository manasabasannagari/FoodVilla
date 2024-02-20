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
        const json = await data.json();
        console.log(json.data.cards[0].card.card.info)
        setRestaurant(json.data.cards[0].card.card.info);
    }
    return restaurant;
};
export default useRestaurant;
