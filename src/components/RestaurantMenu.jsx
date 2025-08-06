import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  // console.log(params);
  const { resId } = useParams();

  // Creating custom hook
  const resInfo = useRestaurantMenu(resId);

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
