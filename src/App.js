import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { getTodaysWeather, getFiveDayWeather } from "./api/gettodaysweather";

import TodaysWeather from './components/todaysWeather/todaysWeather';
import FiveDayForcast from "./components/fiveDayForcast/fiveDayForcast"

function App() {
  const [clicked, setClicked] = useState(false);
  const [zip, setZip] = useState('90502');
  const [cityState, setCityState] = useState('long beach');
  const [todaysWeather, setTodayWeather] = useState(false);
  const [fiveDayWeather, setFiveDayWeather] = useState(false);

  
  console.log(todaysWeather);
  
  const requestTodaysWeather = async() => {
    setTodayWeather(await getTodaysWeather(zip))
  };

  const requestFiveDayWeather = async() => {
    console.log(await getFiveDayWeather(cityState));
    setFiveDayWeather(await getFiveDayWeather(cityState))
  };
  
  useEffect(()=>{
    requestTodaysWeather();
    requestFiveDayWeather();
  }, [clicked]);
  
  return (
    <div className="App">
      {/* <div className="fetchTodaysWeather__container"></div> */}
      <button onClick={() => setClicked(!clicked)}>Click</button>
      <input
      onChange={(e) => {
        setZip(e.target.value);
      }}
      value={zip}
      ></input>
      <TodaysWeather todaysWeather={todaysWeather} />
      <FiveDayForcast fiveDayWeather = {fiveDayWeather}/>

    </div>
    
  );
}

export default App;
