// import { CDN_URL } from "./../utils/constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux-store-slices/cartSlice";

const ItemList = ({ items }) => {
  //   console.log("items", items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispact an action here
    // dispatch(addItem("Pizza"));
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="p-4">
          <div className="flex justify-between w-full">
            <span>{item?.card?.info?.name}</span>
            <span>
              Rs.
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <div className="flex justify-between mt-2 w-full">
            <span className="font-sm text-black/70 text-xs w-10/12">
              {item?.card?.info?.description}
            </span>
            <div className="relative w-2/12">
              <img
                className="w-full h-30"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.card?.info?.imageId
                }
              />
              <button
                onClick={() => handleAddItem(item)}
                className="border-1 border-green-600 bg-white p-1 uppercase absolute bottom-2 left-0 right-0 w-[80px] m-auto cursor-pointer text-sm text-green-600 rounded"
              >
                ADD +
              </button>
            </div>
          </div>

          <hr className="!border-black/70 mt-3" />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
