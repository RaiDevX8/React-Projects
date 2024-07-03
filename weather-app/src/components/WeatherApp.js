

  import React, { useState } from 'react';
  import './WeatherApp.css'; // Import your CSS file for styling
  
  const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
  
    const API_KEY = '77dfd081e4ef405680c154230242202'; 
  
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchWeatherData();
    };
  
    return (
      <div className="weather-app">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Get Weather</button>
        </form>
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <div className="weather-info">
            <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
            <p className="temperature">{weatherData.current.temp_c}°C</p>
            <p className="condition">{weatherData.current.condition.text}</p>
            {/* Add more weather information here */}
          </div>
        )}
      </div>
    );
  };
  
  export default WeatherApp;
  