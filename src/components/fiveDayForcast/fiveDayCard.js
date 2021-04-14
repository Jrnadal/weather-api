import React from 'react';


const FiveDayCard = ({day}) => {
    return (<div className="fivedaycard__container">
        <h2>Temp: {day && day.main.temp}</h2>
        <h2>Humidity: {day && day.main.humidity}</h2>
        <img className="weather-icon" src={`http://openweathermap.org/img/w/${day && day.weather[0].icon}.png`}/>
    </div>);
}

export default FiveDayCard;