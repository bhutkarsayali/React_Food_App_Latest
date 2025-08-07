import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const params = useParams();
  // console.log(params);
  const { resId } = useParams();

  // Creating custom hook
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }
  // const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const {
    name = "Unnamed Restaurant",
    city,
    cuisines = [],
    costForTwoMessage,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards = [] } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  console.log(
    "itemCards",
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const itemCategories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card.card?.["@type"] ==
        ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    );

  console.log("itemCategories", itemCategories);

  return (
    <div className="resMenu-container">
      <div className="resMenu-header">
        <div className="text">
          <h1 className="font-bold text-2xl text-orange-700">{name}</h1>
          <h2>{city}</h2>
          <h3>
            {cuisines.join(",")} : {costForTwoMessage}
          </h3>
        </div>
        <div className="image">
          <img
            src={
              CDN_URL + resInfo?.cards?.[2]?.card?.card?.info?.cloudinaryImageId
            }
          />
        </div>
      </div>

      <h2 className="menu">Menu</h2>
      {/* Accordion with its separate component */}
      {itemCategories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showitems={index === showIndex ? true : false}
          setShowIndex={setShowIndex}
          currIndex = {index}
          showIndex = {showIndex}
        />
      ))}

      {/* Accordion Without its separate component */}
      {itemCategories.map((category, index) => {
        return (
          <div key={index} className="shadow shadow-black">
            <h2 className="font-bold text-white p-5 flex justify-between items-center bg-cyan-900">
              {category?.card?.card?.title}
            </h2>
            <div>
              <ul>
                {itemCards.map((item) => (
                  <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} : Rs.
                    {item?.card?.info?.price / 100}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
