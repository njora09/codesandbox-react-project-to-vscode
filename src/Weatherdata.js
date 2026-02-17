import React from "react";

export default function Weatherdata() {
  return (
    <div>
      <div className="weather-data">
        <div>
          <h1 className="weather-app-city" id="city">
            Bern
          </h1>
          <p className="weather-app-details">
            <span id="time">10:05 am</span>,{" "}
            <span id="description">cloudy</span>
            <br />
            Humidity: <strong id="humidity">40%</strong>, Wind:
            <strong id="wind-speed">2km/h</strong>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <div id="icon"></div>
          <div className="weather-app-temperature" id="temperature">
            🥶 1
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>

      <div className="weather-forecast" id="forecast">
        getting better 👌🏻
      </div>
    </div>
  );
}
