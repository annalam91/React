import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    let displayText = "";
    if(this.state.isLoggedIn){
      displayText = "in"
    } else {
      displayText = "out"
    }
    return (
      <div>
        <h4>You are currently logged {displayText}</h4>
      </div>
    )
  }
}

export default App
