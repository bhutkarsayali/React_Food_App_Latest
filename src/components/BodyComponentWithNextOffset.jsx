import React, { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [nextOffset, setNextOffset] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (offset = "") => {
    setLoading(true);
    try {
      const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5073514&lng=73.8076543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING${offset ? `&offset=${offset}` : ""}`;
      const response = await fetch(url);
      const json = await response.json();

      const newRestaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(prev => [...prev, ...newRestaurants]);

      const next = json?.data?.pageOffset?.nextOffset;
      setNextOffset(next || "");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadMore = () => {
    if (nextOffset) {
      fetchData(nextOffset);
    }
  };

  return (
    <div className="body-container">
      <h2 className="text-xl font-bold mb-4">🍽️ Restaurants Near You</h2>

      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>

      {nextOffset && (
        <button className="filter-btn mt-6" onClick={loadMore}>
          Load More
        </button>
      )}

      {loading && <p className="text-blue-500 mt-4">Loading...</p>}
    </div>
  );
};

export default Body;