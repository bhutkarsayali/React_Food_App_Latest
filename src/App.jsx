import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import "./../Index.css";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

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
//Lazy loading
const GroceryLazyLoaded = lazy(() => import("./components/Grocery"));
const AboutLazyLoaded = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //some authentication code for loggedin user
    const data = {
      name: "Sayali Bhutkar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="container !w-[100vw]">
          {/** Keep header inract and change below children routes */}
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Please Wait Loading...</h2>}>
            <AboutLazyLoaded />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <GroceryLazyLoaded />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
