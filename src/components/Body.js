import RestaurantCard from "./RestaurantCard";
import restaurantObjList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      info: {
        id: "1003414",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        sla: {
          slaString: "40-45 mins",
        },
      },
    },
    {
      info: {
        id: "1003415",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        sla: {
          slaString: "40-45 mins",
        },
      },
    },
    {
      info: {
        id: "1003416",
        name: "MCD",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.3,
        sla: {
          slaString: "40-45 mins",
        },
      },
    },
  ]);
//   let listOfRestaurants2 = [
//     {
//       info: {
//         id: "1003414",
//         name: "Pizza Hut",
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
//         costForTwo: "₹350 for two",
//         cuisines: ["Pizzas"],
//         avgRating: 4.3,
//         sla: {
//           slaString: "40-45 mins",
//         },
//       },
//     },
//     {
//       info: {
//         id: "1003415",
//         name: "KFC",
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
//         costForTwo: "₹350 for two",
//         cuisines: ["Pizzas"],
//         avgRating: 4.3,
//         sla: {
//           slaString: "40-45 mins",
//         },
//       },
//     },
//     {
//       info: {
//         id: "1003416",
//         name: "MCD",
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
//         costForTwo: "₹350 for two",
//         cuisines: ["Pizzas"],
//         avgRating: 3.3,
//         sla: {
//           slaString: "40-45 mins",
//         },
//       },
//     },
//   ];
  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            //Filter logic goes here
            const FilteredList = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4
            );
            // console.log(listOfRestaurants);
            console.log(FilteredList);
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
