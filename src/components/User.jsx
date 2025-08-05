import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async() => {
    const data = await fetch("https://api.github.com/users/bhutkarsayali");
    const json = await data.json();
    console.log(json);
  }
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
      <h2>Name: {props.name}</h2>
      <h2>Location: {props.location}</h2>
    </div>
  );
};
export default User;
