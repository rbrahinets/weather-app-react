import React from 'react';
import './Forecast.css';
import {ForecastPropsInterface} from '../interfaces/ForecastPropsInterface';

const Forecast: React.FC<ForecastPropsInterface> = (
    {
        forecast
    }
) => {
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
                </div>
                <div className='section-bottom-right'>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
