import RestaurantCard from "./RestaurantCard";
import restaurantObjList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantObjList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5073514&lng=73.8076543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // console.log("Data" + data);
    const json = await data.json();
    console.log(json);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5073514&lng=73.8076543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );

  //     if (!response.ok) throw new Error("Failed to fetch data");

  //     const json = await response.json();
  //     console.log("Fetched JSON:", json);
  //     // Optionally extract cards and update state here
  //   } catch (error) {
  //     console.error("API Error:", error.message);
  //   }
  // };

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("button clicked");
            //Filter logic goes here
            const FilteredList = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4
            );
            // console.log(listOfRestaurants);
            // console.log(FilteredList);
            setListOfRestaurants(FilteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={restaurantObjList[0]} />
        <RestaurantCard resData={restaurantObjList[1]} />
        <RestaurantCard resData={restaurantObjList[2]} /> */}

        {/* looping over an array using map function */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
