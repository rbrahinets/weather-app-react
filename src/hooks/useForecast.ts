import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {actionCreators, State} from '../state';
import {LocationInterface} from '../interfaces/LocationInterface';
import {ForecastInterface} from '../interfaces/ForecastInterface';
import useSettings from './useSettings';

const BASE_URL: string = 'https://api.openweathermap.org';

const useForecast = () => {
    const dispatch = useDispatch();
    const {
        setInput,
        setLocations,
        setLocation,
        setForecast,
        updateForecast,
        deleteForecast,
    } = bindActionCreators(
        actionCreators,
        dispatch
    );
    const {location} = useSelector((state: State) => state.location);
    const {forecasts} = useSelector((state: State) => state.forecasts);
    const {
        getCities,
        setCity,
        deleteCity,
        setTypeTemp,
        updateTypeTemp,
        deleteTypeTemp,
    } = useSettings();
    const language: any = localStorage.getItem('i18nextLng');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value.trim()
        setInput(event.target.value);

        if (value !== '') {
            getLocations(value).then();
        }
    };

    const getLocations = async (city: string) => {
        try {
            const response = await axios.get(
                `${BASE_URL}/geo/1.0/direct?q=${city.trim()}&limit=3&lang=${language}&appid=${
                    process.env.REACT_APP_API_KEY
                }`
            );
            const data = response.data;

            setLocations(data);
        } catch (error) {
            console.error({error});
        }
    };

    const onLocationSelect = (location: LocationInterface) => {
        setLocation(location);
    };

    const onSearch = (): void => {
        if (!location || getCities().includes(location.name)) {
            return;
        }

        if (!getCities().includes(location.name)) {
            getForecast(location.name).then();
        }
    };

    const getForecast = async (city: string) => {
        try {
            const response = await axios.get(
                `${BASE_URL}/data/2.5/forecast?q=${city}&appid=${
                    process.env.REACT_APP_API_KEY
                }`
            );
            const data = response.data;
            const forecastData = {
                ...data.city,
                id: forecasts[forecasts.length - 1] ? forecasts[forecasts.length - 1].id + 1 : 0,
                list: data.list,
            };

            for (const forecast of forecasts) {
                if (forecast.name === forecastData.name) {
                    return;
                }
            }

            setTypeTemp(forecastData.id.toString(), 'C');
            setForecast(forecastData);
            setCity(forecastData.name);
        } catch (error) {
            console.error({error});
        }
    };

    const updateTypeTempOfForecast = (forecast: ForecastInterface, type: string) => {
        updateForecast(forecast);
        updateTypeTemp(forecast.id.toString(), type);
    }

    const deleteForecastFromArray = (forecast: ForecastInterface) => {
        deleteForecast(forecast);
        deleteTypeTemp(forecast.id.toString());
        deleteCity(forecast.name);
    }

    const getCity = (location: LocationInterface): string => {
        return location.local_names && location.local_names[language]
            ? location.local_names[language]
            : location.name;
    }

    useEffect(() => {
        if (location) {
            setInput(getCity(location));
            setLocations([]);
        }
    }, [location]);

    return {
        onInputChange,
        onLocationSelect,
        onSearch,
        updateTypeTempOfForecast,
        deleteForecastFromArray,
        getForecast,
    }
}

export default useForecast;
