import React from 'react';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import './Forecast.css';
import {ForecastPropsInterface} from '../interfaces/ForecastPropsInterface';
import {actionCreators} from '../state';
import Plot from './Plot';
import useSettings from '../hooks/useSettings';

const Forecast: React.FC<ForecastPropsInterface> = (
    {
        forecast
    }
) => {
    const {
        getTypeTemp,
        setTypeTemp,
        deleteTypeTemp,
    } = useSettings();
    const dispatch = useDispatch();
    const {deleteForecast,} = bindActionCreators(actionCreators, dispatch);

    const convertTemp = (temp: number, isCelsius: boolean): number => {
        return isCelsius
            ? Math.round(temp - 273.15)
            : Math.round((temp - 273.15) * 9 / 5 + 32);
    }

    const today = forecast.list[0];
    const date: Date = new Date(today.dt * 1000);
    const weekdays: string[] = [
        'Sun',
        'Mon',
        'Tues',
        'Wed',
        'Thurs',
        'Fri',
        'Sat'
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
    let isCelsius: boolean = getTypeTemp(forecast.id.toString()) === 'C';
    let temp: number = convertTemp(today.main.temp, isCelsius);
    const feelsLike: number = convertTemp(today.main.feels_like, isCelsius);
    const plotDataTimes: number[] = [];
    const plotTemps: number[] = [];

    for (const day of forecast.list) {
        plotDataTimes.push(day.dt);
        plotTemps.push(convertTemp(day.main.temp, isCelsius));
    }

    const changeTypeOfTemp = (): void => {
        isCelsius = !isCelsius;
        setTypeTemp(forecast.id.toString(), isCelsius ? 'C' : 'F');
    };

    const deleteCurrentForecast = () => {
        deleteForecast(forecast);
        deleteTypeTemp(forecast.id.toString());
    }

    return (
        <div className='forecast-container'>
            <div className={`section section-top ${temp > 0 ? 'background-color-hot' : 'background-color-cold'}`}>
                <div className='section-top-left'>
                    <div className='bold'>{forecast.name}, {forecast.country}</div>
                    <div>{formattedDateTime}</div>
                </div>
                <div className='section-top-right'>
                    <div className='section-left'>
                        <img
                            src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
                            alt={`weather-icon-${today.weather[0].description}`}
                            className='img-weather'
                        />
                    </div>
                    <div className='section-left'>
                        {today.weather[0].main}
                    </div>
                    <div className='section-right'>
                        <img
                            src={'close.png'}
                            alt='close'
                            className='img-close'
                            onClick={deleteCurrentForecast}
                        />
                    </div>
                </div>
            </div>
            <div className={`section section-middle ${temp > 0 ? 'background-color-hot' : 'background-color-cold'}`}>
                <Plot dateTimes={plotDataTimes} temperatures={plotTemps}/>
            </div>
            <div className={`section section-bottom ${temp > 0 ? 'background-color-hot' : 'background-color-cold'}`}>
                <div className='section-bottom-left'>
                    <div className='temp-container'>
                        <div className='temp-left-container temp-size temp-selected'>
                            <span className='bold'>
                                {temp > 0 ? ' +' : ' '}
                            </span>
                            {temp}
                        </div>
                        <div className='temp-right-container'>
                            <div className='temp-top-container'>
                                <span className='temp-type temp-selected'>
                                    <sup>o</sup>
                                    {isCelsius ? 'C' : 'F'}
                                </span>
                                <span
                                    className='temp-type active-button'
                                    onClick={changeTypeOfTemp}
                                >
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
