import React from 'react';
import './Forecast.css';
import {ForecastPropsInterface} from '../interfaces/ForecastPropsInterface';

const Forecast: React.FC<ForecastPropsInterface> = (
    {
        forecast
    }
) => {
    return (
        <div className='forecast-container'>
            <div className='section section-top'>
                <div className='section-top-left'>
                </div>
                <div className='section-top-right'>
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
