import React, { useState } from "react";
import "./App.css";
import Api from "./Api";

const WeatherApp = () => {
  const [city, setCity] = useState("Delhi");
  const [showWeather, setShowWeather] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetchWeatherData(city);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWeatherData(data);
      setShowWeather(true);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchWeatherData = async (city) => {
    const apiKey = "521908452217af8a3f64696dbc0fecca";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return await fetch(url);
  };

  return (
    <div className="Container">
      <h2>Weather App</h2>

      <div>
        <input
          type="text"
          placeholder="Search your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <div>
          <img src="4.png" alt="cloudy" />
        </div>

        <div>{showWeather && <Api weatherData={weatherData} />}</div>
      </div>
    </div>
  );
};

export default WeatherApp;
