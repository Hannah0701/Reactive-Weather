import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";


function WeatherCard(props) {
  let forecast;
  if (props.data.forecast === "Sunny") {
    forecast = sunny;
  } else if (props.data.forecast === "Rainy") {
    forecast = rainy;
  } else if (props.data.forecast === "Partly cloudy") {
    forecast = partlyCloudy;
  } else {
    forecast = cloudy;
  }
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src={forecast} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;