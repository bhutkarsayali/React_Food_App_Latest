import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const StyleCard = {
  backgroundColor: "rgb(255 238 238)",
};

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info ?? {};

  const { loggedInUser } = useContext(UserContext);
  return (
    <div data-testid="rescard" className="res-card" style={StyleCard}>
      <img src={CDN_URL + cloudinaryImageId} />
      {/* {console.log(Array.isArray(resData.info.cuisines), resData.info.cuisines)} */}

      <h3 className="title font-bold">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <p>User : {loggedInUser}</p>
    </div>
  );
};

// Higher Order Component
// Contract is :
// Input RestaurantCard ==> output - RestaurantCardPromoted
// It takes original component as input
// And Returns a component
// that component again returns some JSX

export const withPromotedLabel = (RestaurantCard) => {
  // returns component
  return (props) => {
    // component returns JSX with the original component
    return (
      <div>
        <label className="absolute bg-black/70 text-white p-3 text-sm py-1 rounded shadow-lg shadow-black uppercase tracking-wide">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
