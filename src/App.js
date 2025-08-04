import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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
