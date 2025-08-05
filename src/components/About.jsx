import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      <h1 className="about-title">About Us</h1>
      <User />
      <hr></hr>
      <UserClass />
    </>
  );
};
export default About;

// Below code is to understand how component lifecyckle works inside class based components
import React from "react";
// import { Component } from "react";

// class About extends Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//     console.log("Parent - Constructor called first");
//   }
//    componentDidMount() {
//     console.log("Parent -then componentDidMount is called");
//     // Make API call Here
//   }
//   render() {
//     console.log("Parent -then Render is called");

//     return (
//       <>
//         <h1 className="about-title">About Us</h1>
//         <UserClass name={"Sayali Class"} location={"Pune"} />
//       </>
//     );
//   }
// }

// export default About;
