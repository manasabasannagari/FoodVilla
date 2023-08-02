import { RestaurantCard } from "./restaurant";
import { useState, useEffect } from "react";
import {ShimmerUI} from './ShimmerUI';
import { Link } from "react-router-dom";
function filterData(searchText, list) {
  if (searchText.length > 0) {
    return list.filter((res) => {
      // console.log(res.data.name, searchText);
      return res.data.name.toLowerCase().includes(searchText.toLowerCase()) ?? "No result found"
    });
  } else{
    return list;
  }
}

export const BodyComponent = () => {
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
    setFilteredRestaurantList(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle.restaurants);
    setActualRestaurantList(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle.restaurants);
}
/**
 * Conditional Rendering:
 * if restaurantlist is empty ==> shimmer UI
 * if restaurantList !== empty ==> actual UI
 */
  return (actualRestaurantList.length === 0 )? <ShimmerUI/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <button
        className="search-btn"
        onClick={() => {
          /**We need to filter the restro list */
          const data = filterData(searchInput, actualRestaurantList);
          console.log(data);
          setFilteredRestaurantList(data);
        }}
      >
        Search
      </button>
      <div className="main-container">
        <div className="restaurant-list">
          {
          filteredRestaurantList ? filteredRestaurantList.map((res) => {
            return (
              <Link to={"/restaurantMenu/"+res?.info?.id} key={res.info.id}>
                <RestaurantCard {...res?.info} />
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
