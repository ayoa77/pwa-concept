import React, { useState } from 'react';
// // import logo from './logo.svg';

import { fetchWeather } from "./api/fetchWeather";
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [ weather, setWeather] = useState('');

  const search = async (e) => {
    if(e.key === 'Enter'){
      const response = await fetchWeather(query);
      
      console.log(response);
      setWeather(response);
      setQuery('');
    }
  }

    return (
      <div className="main-container">
        <label>
          Search your city here.
          <input
            id="searchBox"
            type="text"
            className="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </label>
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
    );
};

export default App;
