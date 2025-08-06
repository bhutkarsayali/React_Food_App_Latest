//this hook takes the resId and returns the res Info
// take the restaurant id and frtch the data and return that data back to the component

import { useEffect, useState } from "react";
import { RESTAURANTS_MENU_API } from "./constants";

// from where the hook is called
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  }
  //return resInfo
  return resInfo;
};

export default useRestaurantMenu;
