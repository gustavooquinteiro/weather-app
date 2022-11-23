import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import Search from './components/search/search';

function App() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()
      
      setWeather({city: searchData.label, ...weatherResponse})
      setForecast({city: searchData.label, ...forecastResponse})
    }).catch((err) => console.log(err))
  }
  console.log(weather)
  console.log(forecast)
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {weather && <CurrentWeather data={weather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
