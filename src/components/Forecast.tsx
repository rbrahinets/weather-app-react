import React from 'react';
import './Forecast.css';
import {ForecastPropsInterface} from '../interfaces/ForecastPropsInterface';

const Forecast: React.FC<ForecastPropsInterface> = (
    {
        forecast
    }
) => {
    const convertTemp = (temp: number, isCelsius: boolean): number => {
        return isCelsius
            ? Math.round(temp - 273.15)
            : Math.round((temp - 273.15) * 9 / 5 + 32);
    }

    const today = forecast.list[0];
    const date: Date = new Date(today.dt * 1000);
    const weekdays: string[] = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const weekday: string = weekdays[date.getUTCDay()];
    const day: number = date.getUTCDate();
    const month: string = months[date.getUTCMonth()];
    const hours: string = String(date.getUTCHours()).padStart(2, '0');
    const minutes: string = String(date.getUTCMinutes()).padStart(2, '0');
    const formattedDateTime: string = `${weekday}, ${day} ${month}, ${hours}:${minutes}`;
    let isCelsius: boolean = true;
    const temp: number = convertTemp(today.main.temp, isCelsius);
    const feelsLike: number = convertTemp(today.main.feels_like, isCelsius);

    return (
        <div className='forecast-container'>
            <div className='section section-top'>
                <div className='section-top-left'>
                    <div className='bold'>{forecast.name}, {forecast.country}</div>
                    <div>{formattedDateTime}</div>
                </div>
                <div className='section-top-right'>
                    <div className='section-left'>
                        <img
                            alt={`weather-icon-${today.weather[0].description}`}
                            src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
                        />
                    </div>
                    <div className='section-right'>
                        {today.weather[0].main}
                    </div>
                </div>
            </div>
            <div className='section section-middle'>
            </div>
            <div className='section section-bottom'>
                <div className='section-bottom-left'>
                    <div className='bold temp-container'>
                        <div className='temp-left-container temp-size temp-selected'>
                            {temp > 0 ? ' +' : ' '}{temp}
                        </div>
                        <div className='temp-right-container'>
                            <div className='temp-top-container'>
                                <span className='temp-selected temp-type'>
                                    <sup>o</sup>
                                    {isCelsius ? 'C' : 'F'}
                                </span>
                                <span className='temp-type'>
                                    | <sup>o</sup>
                                    {!isCelsius ? 'C' : 'F'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        Feels like:
                        <span className='bold'>
                            {feelsLike > 0 ? ' +' : ' '}{feelsLike}
                            <sup> o</sup>{isCelsius ? 'C' : 'F'}
                        </span>
                    </div>
                </div>
                <div className='section-bottom-right'>
                    <div className='section-bottom-right-item'>
                        Wind:
                        <span
                            className={`bold ${temp > 0 ? 'color-hot' : 'color-cold'}`}>
                            {` ${Math.round(today.wind.speed)}`} m/s
                        </span>
                    </div>
                    <div className='section-bottom-right-item'>
                        Humidity:
                        <span
                            className={`bold ${temp > 0 ? 'color-hot' : 'color-cold'}`}>
                        {` ${today.main.humidity}`}%
                        </span>
                    </div>
                    <div className='section-bottom-right-item'>
                        Pressure:
                        <span
                            className={`bold ${temp > 0 ? 'color-hot' : 'color-cold'}`}>
                            {` ${today.main.pressure}`}Pa
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
