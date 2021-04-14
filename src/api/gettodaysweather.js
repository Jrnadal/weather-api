import axios from 'axios';

const apiKey = 'fa66c2f56103872f44aa94a4257ed8c2';

export const getTodaysWeather = async (zip) => {
    const apiAddress = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${apiKey}` 
    const results = await axios(apiAddress)
    console.log(results);
    return results.data;
};

export const getFiveDayWeather = async (cityState) => {
    const api5day = `https://api.openweathermap.org/data/2.5/forecast?q=${cityState}&appid=${apiKey}`
    const response = await axios(api5day)
    console.log(response);
    return response.data;
};