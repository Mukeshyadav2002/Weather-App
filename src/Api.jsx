import React from "react";

const Api = ({ weatherData }) => {
  return (
    <div>
      {weatherData ? (
        <div>
          <h3>{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Api;
