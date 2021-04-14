import React from 'react';

const TodaysWeather = ({ todaysWeather }) => {
    return ( 
    <div className="forcast-container">
        <img className="weather-icon" src={`http://openweathermap.org/img/w/${todaysWeather && todaysWeather.weather[0].icon}.png`} />
        <h2>Temp: {todaysWeather && todaysWeather.main.temp}</h2>
        <h2>Humidity: {todaysWeather && todaysWeather.main.humidity}</h2>
    </div>
    );
}

export default TodaysWeather;