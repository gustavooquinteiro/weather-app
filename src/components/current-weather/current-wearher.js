import './current-weather.css'

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'></p>
                    <p className='weather-description'></p>
                </div>
                <img alt="" className='weather-icon' src='' />
            </div>
            <div className='bottom'>
                <p className='temperature'></p>
                <div className='details'>
                    <div className='parameters-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameters-row'>
                        <span className='parameter-label'></span>
                        <span className='parameter-value'></span>
                    </div>
                    <div className='parameters-row'>
                        <span className='parameter-label'></span>
                        <span className='parameter-value'></span>
                    </div>
                    <div className='parameters-row'>
                        <span className='parameter-label'></span>
                        <span className='parameter-value'></span>
                    </div>
                    <div className='parameters-row'>
                        <span className='parameter-label'></span>
                        <span className='parameter-value'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;