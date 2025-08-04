import React, { useEffect, useState } from "react";

const SwiggyRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  // Initial GET request
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5073514&lng=73.8076543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        const cards = data?.data?.cards || [];
        setRestaurants(cards);
      } catch (error) {
        console.error("Initial GET error:", error);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch next page using POST
  const fetchMoreRestaurants = async () => {
    if (isFetching) return;
    setIsFetching(true);
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          lat: 18.5073514,
          lng: 73.8076543,
          page: page + 1
        })
      });
      const data = await response.json();
      const newCards = data?.data?.cards || [];

      setRestaurants(prev => [...prev, ...newCards]);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error("POST update error:", error);
    } finally {
      setIsFetching(false);
    }
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const bottomOffset = 300; // Trigger when within 300px of bottom
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - bottomOffset
      ) {
        fetchMoreRestaurants();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, isFetching]);

  return (
    <div>
      <h2>🍲 Swiggy Restaurants in Pune</h2>
      <ul>
        {restaurants.map((card, index) => (
          <li key={index}>{card?.data?.name}</li>
        ))}
      </ul>
      {isFetching && <p style={{ textAlign: "center" }}>Loading more restaurants...</p>}
    </div>
  );
};

export default SwiggyRestaurants;
