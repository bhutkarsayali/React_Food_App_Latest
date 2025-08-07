import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Defaulte User",
});

export default UserContext;
