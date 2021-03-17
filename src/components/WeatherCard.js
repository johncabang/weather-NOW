import { useState } from "react";
import weatherData from ".././api/api";
import "../App.css";

function WeatherCard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (event) => {
    if (event.key === "Enter") {
      const data = await weatherData(city);
      setWeather(data);
      setCity("");
    }
  };

  return (
    <div className="App">
      <div className="app-card">
        {weather.main ? (
          <>
            <h1>{weather.name}</h1>
            <h1>
              {Math.round(weather.main.temp)}
              &deg;C
            </h1>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="app-weather-icon"
            />
          </>
        ) : (
          <>
            <h2>Weather check?</h2>
          </>
        )}
        <input
          type="text"
          className="app-search"
          placeholder="Enter your location"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onKeyPress={search}
          style={{
            padding: 5,
            textAlign: "center",
            borderRadius: 25,
            outline: "none",
          }}
        />
      </div>
    </div>
  );
}

export default WeatherCard;
