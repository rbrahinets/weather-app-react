import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {actionCreators, State} from '../state';
import {LocationInterface} from '../interfaces/LocationInterface';
import useSettings from './useSettings';

const BASE_URL: string = 'https://api.openweathermap.org';

const useForecast = () => {
    const dispatch = useDispatch();
    const {
        setInput,
        setLocations,
        setLocation,
        setForecast
    } = bindActionCreators(
        actionCreators,
        dispatch
    );
    const {location} = useSelector((state: State) => state.location);
    const {forecasts} = useSelector((state: State) => state.forecasts);
    const {setTypeTemp} = useSettings();

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
                `${BASE_URL}/geo/1.0/direct?q=${city.trim()}&limit=3&lang=en&appid=${
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
        if (!location) {
            return;
        }

        getForecast(location).then();
    };

    const getForecast = async (location: LocationInterface) => {
        try {
            const response = await axios.get(
                `${BASE_URL}/data/2.5/forecast?q=${location.name}&appid=${
                    process.env.REACT_APP_API_KEY
                }`
            );
            const data = response.data;
            const forecastData = {
                ...data.city,
                id: forecasts.length + 1,
                list: data.list,
            };

            setTypeTemp(forecastData.id.toString(), 'C');
            setForecast(forecastData);
        } catch (error) {
            console.error({error});
        }
    };

    useEffect(() => {
        if (location) {
            setInput(location.name);
            setLocations([]);
        }
    }, [location]);

    return {
        onInputChange,
        onLocationSelect,
        onSearch
    }
}

export default useForecast;
