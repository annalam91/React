import React from "react";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({loading:true})
    fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => {
          this.setState({
            loading: false,
            character: data
          })
        });
    } 

  render() {
    return (
      <div className="App">
        <h3>{this.state.loading ? "Loading..." : this.state.character.name}</h3>
      </div>
    );
  }
}

export default App;
