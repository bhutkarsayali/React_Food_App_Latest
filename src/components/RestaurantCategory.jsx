import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const [showitems, setShowItems] = useState(false);
  const { data } = props;
  console.log(props);
  const handleClick = () => {
    // setShowItems(true);
    setShowItems(!showitems);
  };
  return (
    <div className="shadow shadow-black mb-5">
      {/* Accordion Header */}
      <div
        onClick={() => handleClick()}
        className="flex justify-between items-center  bg-red-300"
      >
        <h2 className="font-bold text-white p-5 flex justify-between items-center">
          {data?.title} ({data.itemCards.length})
        </h2>
        <span className="pr-5">
          {showitems ? <BiChevronUp /> : <BiChevronDown />}
        </span>
      </div>
      {/* Accordion Body */}
      {showitems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
