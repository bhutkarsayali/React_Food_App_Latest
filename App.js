import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div id="parent">
 *  <div id ="child">
 *    <h1></h1>
 *    <h2></h2>
 *  </div>
 * <div id ="child2">
 *    <h1></h1>
 *    <h2></h2>
 *  </div>
 * </div>
 */
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am the H1 tag"),
//     React.createElement("h2", {}, "I am the H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am the H1 tag"),
//     React.createElement("h2", {}, "I am the H2 tag"),
//   ]),
// ]);

// JSX => (transplied before it reached the JS) => by PARCEL using Babel
// const jsxHeading = (
//   <h1 id="heading" className="heading" tabIndex="1">
//     Heading From JSX
//   </h1>
// );

// // React Element
// const title = (
//   <h1 id="heading" className="heading" tabIndex="1">
//     Title 1 From JSX
//   </h1>
// );

// // React Functional Component
// const Title2 = () => {
//   return (
//     <h1 id="heading" className="heading" tabIndex="1">
//       Heading From JSX
//     </h1>
//   );
// };

// const HeaderComponent = () => {
//   return (
//     <div className="container">
//       {title}
//       <Title2 />
//       <h1>Header React Functional Component</h1>
//     </div>
//   );
// };

/**************************FOOD DELIVERY APP *****************************/
const StyleCard = {
  backgroundColor: "rgb(255 238 238)",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://play-lh.googleusercontent.com/vW2QYEsJxNAhWmoWfbzemtrngHG0x7Qu7nDiAg28QJM98EcAGZ6FFc-Wgg7VDw7tjnw=w480-h960-rw" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({resName, cuisine}) => {
  // console.log(props);
  return (
    <div className="res-card" style={StyleCard}>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/31/fa2b070a-7908-4ac7-b66f-f63633284c0d_951058.jpg"/>
      <h3 className="title">{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body-container">
      <div className="search"></div>
      <div className="res-container">
        <RestaurantCard resName="Burger House" cuisine="Burger"/>
        <RestaurantCard resName="Pizza House" cuisine="Pizza"/>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
