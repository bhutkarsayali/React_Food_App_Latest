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
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am the H1 tag"),
    React.createElement("h2", {}, "I am the H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am the H1 tag"),
    React.createElement("h2", {}, "I am the H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
