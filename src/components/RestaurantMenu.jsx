import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, RESTAURANTS_MENU_API } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();
  console.log(params);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANTS_MENU_API + resId);
    const json = await data.json();
    // console.log(json?.data?.cards[0]?.card?.card?.text);
    // console.log(json);
    // data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[6]?.card?.card?.categories?.[0]?.card?.info?.name;
    setResInfo(json?.data);
  };

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

  const { itemCards = [], title } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};
  console.log(itemCards);

  return (
    <div className="resMenu-container">
      <div className="resMenu-header">
        <div className="text">
          <h1>{name}</h1>
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
      <ul>
        <h4>{title}</h4>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} : Rs. {item?.card?.info?.price / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
