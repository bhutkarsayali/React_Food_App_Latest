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
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
        <span>
          {internetStatus ? (
            <div
              className="green-dot"
              style={{
                backgroundColor: "rgb(29, 172, 29)",
              }}
            >Online</div>
          ) : (
            <>
              <div className="red-dot" style={OfflineStatusColor}>Offline</div>
            </>
          )}
        </span>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="login-btn"
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
