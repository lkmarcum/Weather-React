import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/weather.scss";

const Weather = ({ coords }) => {
  const [weather, setWeather] = useState({});

  // useEffect(() => {
  //   getWeather(coords.latitude, coords.longitude);
  // }, []);

  const handleLoad = () => {
    getWeather(coords.latitude, coords.longitude);
  };

  const getWeather = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=cae7f85f2e7b7fa5d12f22debcb8f93b`
      )
      .then((res) => {
        console.log(`RES: ${res.data.lat}`);
        // setWeather(res.data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <div className="weather">
      <h3>Weather</h3>
      <button onClick={handleLoad}>Load</button>
      <h4>{coords.latitude}</h4>
      <h4>{coords.longitude}</h4>
    </div>
  );
};

export default Weather;
