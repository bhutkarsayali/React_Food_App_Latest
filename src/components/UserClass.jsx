import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Child - Constructor called first");
  }
  componentDidMount() {
    console.log("Child -then componentDidMount is called");
  }
  render() {
    console.log("Child -then Render is called");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Class based Component</h1>
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count : {count2}</h1>
        <h2>Name: {name}</h2>
        <h2>Lopcation: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
