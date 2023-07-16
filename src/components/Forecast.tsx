import React from 'react';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import './Forecast.css';
import {actionCreators, State} from '../state';
import {ForecastPropsInterface} from '../interfaces/ForecastPropsInterface';
import Plot from './Plot';

const Forecast: React.FC<ForecastPropsInterface> = (
    {
        forecast
    }
) => {
    const dispatch = useDispatch();
    const {
        setIsCelsius
    } = bindActionCreators(
        actionCreators,
        dispatch
    );
    const {isCelsius} = useSelector((state: State) => state.isCelsius);

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
    let temp: number = convertTemp(today.main.temp, isCelsius);
    const feelsLike: number = convertTemp(today.main.feels_like, isCelsius);
    const plotHours: number[] = [];
    const plotTemps: number[] = [];

    for (const day of forecast.list) {
        plotHours.push(new Date(day.dt * 1000).getHours());
        plotTemps.push(convertTemp(day.main.temp, isCelsius));
    }

    const changeTypeOfTemp = (): void => {
        setIsCelsius(!isCelsius);
    };

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
                            alt={`weather-icon-${today.weather[0].description}`}
                            src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
                        />
                    </div>
                    <div className='section-right'>
                        {today.weather[0].main}
                    </div>
                </div>
            </div>
            <div className={`section section-middle ${temp > 0 ? 'background-color-hot' : 'background-color-cold'}`}>
                <Plot hours={plotHours} temperatures={plotTemps}/>
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
