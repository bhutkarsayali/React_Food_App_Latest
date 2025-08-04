import RestaurantCard from "./RestaurantCard";
import restaurantObjList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search"></div>
      <div className="res-container">
        {/* <RestaurantCard resData={restaurantObjList[0]} />
        <RestaurantCard resData={restaurantObjList[1]} />
        <RestaurantCard resData={restaurantObjList[2]} /> */}

        {/* looping over an array using map function */}
        {restaurantObjList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
