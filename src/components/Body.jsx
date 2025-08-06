import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANTS_LIST_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  // const [page, setPage] = useState(1);
  // const [isFetching, setIsFetching] = useState(false);
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_LIST_API);

    // console.log("Data" + data);
    const json = await data.json();
    // console.log(json);
    // now render the app again with data
    setListOfRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("listOfRestaurants", listOfRestaurants);

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

  // Fetch next page using POST
  // const fetchMoreRestaurants = async () => {
  //   if (isFetching) return;
  //   setIsFetching(true);
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/update",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           lat: 18.5073514,
  //           lng: 73.8076543,
  //           page: page + 1,
  //         }),
  //       }
  //     );
  //     const data = await response.json();
  //     const newCards = data?.data?.cards || [];

  //     setRestaurants((prev) => [...prev, ...newCards]);
  //     setPage((prev) => prev + 1);
  //   } catch (error) {
  //     console.error("POST update error:", error);
  //   } finally {
  //     setIsFetching(false);
  //   }
  // };

  // // Scroll event listener
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const bottomOffset = 300; // Trigger when within 300px of bottom
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop >=
  //       document.documentElement.offsetHeight - bottomOffset
  //     ) {
  //       fetchMoreRestaurants();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [page, isFetching]);
  const internetStatus = useOnlineStatus();
  if (internetStatus === false) {
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );
  }

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container !w-[100vw]">
      <div className="filter mx-20 my-5">
        <div className="search">
          <input
            className="search-input bg-white shadow-lg shadow-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="filter-btn search"
            onClick={() => {
              //Filter restaurant card and update the UI
              console.log(searchText);
              let filteredListOfRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredListOfRestaurants(filteredListOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("button clicked");
            //Filter logic goes here
            const FilteredList = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4.4
            );
            // console.log(listOfRestaurants);
            // console.log(FilteredList);
            // setListOfRestaurants(FilteredList);
            setFilteredListOfRestaurants(FilteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* looping over an array using map function */}
        {filteredListOfRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info.id}
            key={restaurant?.info.id}
          >
            {
              /* If the restaurant is promoted/is opened and have ratings greater than 4.3 then add promoted label to it */
              restaurant?.info?.avgRating > 4.3 &&
              restaurant?.info?.availability?.opened ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
