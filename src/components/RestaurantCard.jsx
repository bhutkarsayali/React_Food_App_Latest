import { CDN_URL } from "../utils/constants";

const StyleCard = {
  backgroundColor: "rgb(255 238 238)",
};

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card h-full flex flex-col justify-between bg-white p-4 !hover:bg-red-20" style={StyleCard}>
      <img
        src={CDN_URL
           +
          cloudinaryImageId
        }
      />
      {/* {console.log(Array.isArray(resData.info.cuisines), resData.info.cuisines)} */}

      <h3 className="title">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
