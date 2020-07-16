import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/weather.scss";

const Weather = ({ coords }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather(coords.latitude, coords.longitude);
  }, [coords]);

  const convertTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedTime = date.toLocaleTimeString();

    return formattedTime;
  };

  const getWeather = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,daily&appid=cae7f85f2e7b7fa5d12f22debcb8f93b`
      )
      .then((res) => {
        console.log(`RES: ${res.data}`);
        setWeather({
          ...weather,
          time: convertTime(res.data.current.dt),
          sunrise: convertTime(res.data.current.sunrise),
          sunset: convertTime(res.data.current.sunset),
          temp: res.data.current.temp,
          feelsLike: res.data.current.feels_like,
          pressure: res.data.current.pressure,
          humidity: res.data.current.humidity,
          dewPoint: res.data.current.dew_point,
          uvi: res.data.current.uvi,
          clouds: res.data.current.clouds,
          visibility: res.data.current.visibility,
          windSpeed: res.data.current.wind_speed,
          windDeg: res.data.current.wind_deg,
          windGust: res.data.current.wind_gust,
          weatherMain: res.data.current.weather[0].main,
          weatherDesc: res.data.current.weather[0].description,
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <div className="weather">
      <h3>Weather</h3>
      <h4>{coords.latitude}</h4>
      <h4>{coords.longitude}</h4>
      <h4>{weather.temp}</h4>
      {weather.temp && <h4>{weather.time}</h4>}
    </div>
  );
};

export default Weather;
