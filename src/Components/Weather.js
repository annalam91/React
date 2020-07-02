import React from "react";
import "../styles/Weather.css";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <span className="temp-current">
          <img
            src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
            alt="current weather icon"
          />
        <p>{this.props.currentTemp}</p>
        </span>
        <br />
        <span className="temp-low">
          <FaTemperatureLow />
        <p>{this.props.maxTemp}</p>
        </span>
        <span className="temp-high">
          <FaTemperatureHigh />
        <p>{this.props.maxTemp}</p>
        </span>
      </div>
    );
  }
}

export default Weather;
