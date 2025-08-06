import { useEffect, useState } from "react";
import { GITHUB_AVATAR_URL } from "../utils/constants";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const data = await fetch("https://api.github.com/users/bhutkarsayali");
    const json = await data.json();
    // console.log(json);
    setUserInfo(json);
  };
  const { login, location, id, avatar_url } = userInfo;
  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        Count Increase
      </button>
      <h1>Count : {count2}</h1>
      <img src={avatar_url} />
      <h2>Name: {login}</h2>
      <h2>Location: {location ?? "Pune"}</h2>
      <h2>Id: {id}</h2>
    </div>
  );
};
export default User;
