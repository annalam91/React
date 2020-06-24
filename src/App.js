import React from "react";
import "./styles/App.css";
import FormComponent from './components/FormComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
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
    return(
   <FormComponent
   handleChange={this.handleChange}
   data={this.state} />
    )
  }
}

export default App;
