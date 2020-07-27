import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '8b60e0d6647070509322cc88fe9ddb22';

export const fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params :{
      q:query,
      units: 'metric',
      APPID: API_KEY,
    }
  });
  console.log(data);

  return data;
}