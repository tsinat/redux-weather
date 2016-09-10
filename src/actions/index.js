import axios from 'axios';

const API_KEY = 'a4abb9a4b60a850e4d8cb5c4bb7d93a1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url =  `${ROOT_URL}&q=${city},us`
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload:request
    };
}
