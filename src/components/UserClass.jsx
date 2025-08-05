import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "dummy",
        location: "Default",
      },
    };

    console.log("Child - Constructor called first");
  }
  async componentDidMount() {
    console.log("Child -then componentDidMount is called");
    const data = await fetch("https://api.github.com/users/bhutkarsayali");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    console.log("Child -then Render is called");
    // const { name, location } = this.props;
    const { count, count2 } = this.state;
    const { login, location, id, avatar_url } = this.state.userInfo;
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
        <img src={avatar_url} />
        <h2>Name: {login}</h2>
        <h2>Location: {location ?? "Pune"}</h2>
        <h2>Id: {id}</h2>
      </div>
    );
  }
}

export default UserClass;
