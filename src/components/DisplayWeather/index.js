import React from 'react'
import './index.css'

const DisplayWeather = (props) => {
const {weatherData} = props
const formatDateTime = (timestamp, timezone) => {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toUTCString();
  };
  return (
    <div>
        
        {weatherData && (
        <div className="weather-details">
          <h2>Current Weather in {weatherData?.name}</h2>
          <p>Temperature: {weatherData?.main?.temp}°K</p>
          <p>Feels Like: {weatherData?.main?.feels_like}°K</p>
          <p>Date and Time: {formatDateTime(weatherData?.dt, weatherData?.timezone)}</p>
          <p>Humidity: {weatherData?.main?.humidity}%</p>
          <p>Wind Speed: {weatherData?.wind?.speed} m/s</p>
          <p>Description: {weatherData?.weather?.[0]?.description}</p>
        </div>
      )}
    </div>
  )
}

export default DisplayWeather