import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const internetStatus = useOnlineStatus();
  console.log("Header Rendererd");
  console.log(internetStatus);

  const OfflineStatusColor = {
    backgroundColor: "red",
  };

  return (
    <div className="header !w-[100vw] flex justify-between shadow-2xl shadow-amber-950 sm:bg-green-100 md:bg-amber-200 lg:bg-red-200">
      <div className="logo flex justify-between items-center">
        <img className="w-30 h-30" src={LOGO_URL} />
        <span>
          {internetStatus ? (
            <div
              className="green-dot"
              style={{
                backgroundColor: "rgb(29, 172, 29)", 
              }}
            >
              Online
            </div>
          ) : (
            <>
              <div className="red-dot" style={OfflineStatusColor}>
                Offline
              </div>
            </>
          )}
        </span>
      </div>
      <div className="nav-items p-4 flex justify-between items-center">
        <ul className="flex justify-between items-center">
          <li className="p-5">
            <Link to="/">Home</Link>
          </li>
          <li className="p-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn ml-5 p-2"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
