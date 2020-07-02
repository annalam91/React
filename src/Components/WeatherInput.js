import React from "react";
import "../styles/WeatherInput.css";
import { FaSearchLocation } from "react-icons/fa";
import Weather from "./Weather";
class WeatherInput extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      currentWeather: "",
      currentTemp: "",
      maxTemp: "",
      minTemp: "",
      icon: "",
      error: false,
      isHidden: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.setState({
        city: e.target.value,
      });
    }
    const { city } = this.state;
 
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_CODE}`;

    fetch(weatherApi)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          this.setState({
            currentWeather: data.weather[0].main,
            currentTemp: Math.round(data.main.temp),
            maxTemp: Math.round(data.main.temp_max),
            minTemp: Math.round(data.main.temp_min),
            icon: data.weather[0].icon,
            error: false,
            isHidden: false,
          });
        } else {
          this.setState({
            currentTemp: undefined,
            maxTemp: undefined,
            minTemp: undefined,
            icon: undefined,
            error: true,
            isHidden: true,
          });
          alert("Error: " + data.message);
        }
      });
  };

  render() {
    return (
      <div className="weather-input">
        <form>
        <input
          type="text"
          value={this.state.city}
          onChange={this.handleChange}
          name="city"
          placeholder="City"
          autoComplete="off"
        />
        <button id="search" onClick={this.handleSubmit}>
          <span className="search-icon">
            <FaSearchLocation />
          </span>
        </button>
        {this.state.isHidden ? undefined : (
          <Weather
            currentTemp={this.state.currentTemp}
            maxTemp={this.state.maxTemp}
            minTemp={this.state.minTemp}
            icon={this.state.icon}
          />
        )}
        </form>
      </div>
    );
  }
}

export default WeatherInput;
