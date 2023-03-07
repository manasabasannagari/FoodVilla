import { RestaurantCard } from "./restaurant";
import { useState, useEffect } from "react";
function filterData(searchText, list) {
  if (searchText.length > 0) {
    return list.filter((res) => {
      console.log(res.data.name, searchText);
      return res.data.name.includes(searchText);
    });
  } else {
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
  const [restaurantList, setRestaurantList] = useState("");
      
    /**Called after the initial page load */
    useEffect(()=>{
        console.log("Use Effect is called...");
        getRestaurants();
},[]);

/**
 * get restaurants
 */
async function getRestaurants() {
  const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5071128&lng=78.35791119999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
}
  return (
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
          const data = filterData(searchInput, restaurantList);
          console.log(data);
          setRestaurantList(data);
        }}
      >
        Search
      </button>
      <div className="main-container">
        <div className="restaurant-list">
          {
          restaurantList ? restaurantList.map((res) => (
            <RestaurantCard {...res.data} />
          )): ""}
          {/* <RestaurantCard {...restaurantMockData.data} hello="world"/> */}
        </div>
      </div>
    </>
  );
};
