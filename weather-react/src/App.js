import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  const [coords, setCoords] = useState({ latitude: "", longitude: "" });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`Lat: ${position.coords.latitude}`);
      console.log(`Long: ${position.coords.longitude}`);
      setCoords({
        ...coords,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <Search /> */}
      <Weather coords={coords} />
    </div>
  );
}

export default App;
