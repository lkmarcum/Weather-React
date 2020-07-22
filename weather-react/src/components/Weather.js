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
          weatherDesc:
            res.data.current.weather[0].description.charAt(0).toUpperCase() +
            res.data.current.weather[0].description.slice(1),
          weatherIcon: res.data.current.weather[0].icon,
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <div className="weather">
      <div className="weather-main">
        <div className="column-one">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weatherIcon}@4x.png`}
          />
          <h3>{weather.time}</h3>
        </div>
        <div className="column-two">
          <h3 className="description">{weather.weatherDesc}</h3>
          <h3>Temp: {weather.temp}&#176;</h3>
          <h3>Feels like: {weather.feelsLike}&#176;</h3>
        </div>
      </div>
      <div className="rows">
        <div className="row">
          <div className="row-item">
            <h2>Humidity</h2>
            <h3>{weather.humidity}%</h3>
          </div>
          <div className="row-item">
            <h2>Dewpoint</h2>
            <h3>{weather.dewPoint}&#176;</h3>
          </div>
          <div className="row-item">
            <h2>UV Index</h2>
            <h3>{weather.uvi}</h3>
          </div>
          <div className="row-item">
            <h2>Pressure</h2>
            <h3>{weather.pressure} hPa</h3>
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <h2>Sunrise</h2>
            <h3>{weather.sunrise}</h3>
          </div>
          <div className="row-item">
            <h2>Sunset</h2>
            <h3>{weather.sunset}</h3>
          </div>
          <div className="row-item">
            <h2>Wind</h2>
            <h3>{weather.windSpeed} mph</h3>
          </div>
          <div className="row-item">
            <h2>Visibility</h2>
            <h3>{weather.visibility * 0.000621} mi</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
