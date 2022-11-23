import Flags from "country-flag-icons/react/3x2";
import './current-weather.css'

const CurrentWeather = ({ data }) => {

    const [city, country] = data.city.split(",")
    const Flag = Flags[country.trim()]

    return (
        <div className='weather'>
            <div className='top'>
                <p className='title'>Weather Today in {city}</p>
                <Flag className='flag' />
            </div>
            <div className='bottom'>
                <img alt={data.weather[0].description} className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='details-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;