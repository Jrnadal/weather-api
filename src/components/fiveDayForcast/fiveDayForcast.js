import React from 'react';


const FiveDayForcast = ({ fiveDayWeather }) => {
    console.log(fiveDayWeather)
    return ( 
    <div className='fiveDayForcast-container'>
        <div className="fiveDayForcast-card">
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${fiveDayWeather && fiveDayWeather.list[0].weather[0].icon}.png`} />
            <h2>Temp: {fiveDayWeather && fiveDayWeather.list[0].main.temp}</h2>
            <h2>Humidity: {fiveDayWeather && fiveDayWeather.list[0].main.humidity}</h2>
        </div>
    </div> );
}
 
export default FiveDayForcast;