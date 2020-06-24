import React from "react";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "California",
      vegetarian: false,
      dairyFree: false,
      nutFree: false,
      glutenFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name] : checked}) : this.setState({ [name]:value})
  }

  render() {
    return (
      <div className="Main">
        <main>
          <form>
            <input 
              type="text"
              value={this.state.firstName} 
              placeholder="First name"
              onChange={this.handleChange}
              name="firstName"
               /> <br/>
            <input
              type="text"
              value={this.state.lastName} 
              placeholder="Last name"
              onChange={this.handleChange}
              name="lastName"
              /> <br/>
            <input
              type="number"
              value={this.state.age} 
              placeholder="Age"
              onChange={this.handleChange}
              name="age"
              /> <br/>
              <label>
            <input
              type="radio"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
              name="gender"
              /> Female
              </label> <br/>
              <label> 
               <input
              type="radio"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
              name="gender"
              />Male
              </label> <br/>
              <label>Select your destination: 
                <select value={this.state.destination} onChange={this.handleChange} name="destination">
                  <option value="California">California</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Chicago">Chicago</option>
                </select>
              </label> <br/> 
              <label>Dietary restrictions
              <input
              type="checkbox"
              value={this.state.vegetarian}
              checked={this.state.vegetarian}
              onChange={this.handleChange}
              name="vegetarian"
              />Vegeterian
              </label>
              <label>
              <input
              type="checkbox"
              value={this.state.dairyFree}
              checked={this.state.dairyFree}
              onChange={this.handleChange}
              name="dairyFree"
              />Dairy Free
              </label> 
              <label>
              <input
              type="checkbox"
              value={this.state.nutFree}
              checked={this.state.nutFree}
              onChange={this.handleChange}
              name="nutFree"
              />Nut Free
              </label> 
              <label>
              <input
              type="checkbox"
              value={this.state.glutenFree}
              checked={this.state.glutenFree}
              onChange={this.handleChange}
              name="glutenFree"
              />Gluten Free
              </label> <br />
              <button>Submit</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
