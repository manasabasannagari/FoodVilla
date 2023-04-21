import { RestaurantCard } from "./restaurant";
import { useState, useEffect } from "react";
import {ShimmerUI} from './ShimmerUI';
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import UserContext from '../utils/UserContext'
// import * as React from 'react'
// const {user} = React.useContext(UserContext);
const buttonStyle = {background:"green"}

export const BodyComponent = (users) => {
  /*searchInput is the LOCAL STATE VARIABLE
    We can have a hardcoded value within the useState arguments.
    useState returns the array, first element in the array is the variable name.
    second elemnt is the method for modifying value 
    */
  const [searchInput, setSearchInput] = useState("");
  const [actualRestaurantList, setActualRestaurantList] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState("");
      
    /**Empty dependency -> Called only once after the initial render */
    useEffect(()=>{
        console.log("Use Effect is called...");
        getRestaurants();
    },[]);

  // /**No dependency array -> Called after every render */
  //   useEffect(()=>{
  //       console.log("Use Effect is called...");
  //       getRestaurants();
  //   });
/**
 * get restaurants
 */
async function getRestaurants() {
  const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5071128&lng=78.35791119999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setActualRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
}

const isonline = useOnline();
if(!isonline){
  return <h1>Offfline, check your internet connection</h1>
}
/**
 * Conditional Rendering:
 * if restaurantlist is empty ==> shimmer UI
 * if restaurantList !== empty ==> actual UI
 */
  return (actualRestaurantList.length === 0 )? <ShimmerUI/> : (
    <>
      <div className="p-2 bg-pink-50 my-2 rounded ">
        <input
          type="text"
          className="focus:bg-green-500"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
        className="p-2 m-2 bg-purple-300 hover:bg-purple-600 text-white rounded"
        onClick={() => {
          /**We need to filter the restro list */
          const data = filterData(searchInput, actualRestaurantList);
          console.log(data);
          setFilteredRestaurantList(data);
        }}
      >
        Search
      </button>
      {/* <input value={user.name}></input> */}
      </div>

      
      <div className="main-container">
        <div className="flex flex-wrap">
          {
          filteredRestaurantList ? filteredRestaurantList.map((res) => {
            return (
              <Link to={"/restaurantMenu/"+res.data.id} key={res.data.id}>
                <RestaurantCard {...res.data} />
              </Link>
            );
          }
          ): ""}
          {/* <RestaurantCard {...restaurantMockData.data} hello="world"/> */}
        </div>
      </div>
    </>
  );
};
