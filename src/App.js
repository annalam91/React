import React from "react";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "Log out" : "Log In";
    let displayText = this.state.isLoggedIn ? "Logged In" : "Logged Out";
    return (
      <div className="App">
        <h1>{displayText}</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
