import React, {useEffect, useState} from 'react';
import './App.css';
import {LocationInterface} from './interfaces/LocationInterface';
import {ForecastInterface} from './interfaces/ForecastInterface';
import Header from './components/Header';
import Search from './components/Search';

const BASE_URL: string = 'https://api.openweathermap.org';

const App: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [locations, setLocations] = useState<[]>([]);
    const [location, setLocation] = useState<LocationInterface | null>(null);
    const [forecast, setForecast] = useState<ForecastInterface | null>(null);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        setInput(event.target.value);

        if (value !== '') {
            getLocations(value).then();
        }
    };

    const getLocations
        = async (city: string) => {
        fetch(
            `${BASE_URL}/geo/1.0/direct?q=${city.trim()}&limit=3&lang=en&appid=${
                process.env.REACT_APP_API_KEY
            }`
        )
            .then((response) => response.json())
            .then((data) => setLocations(data))
            .catch((error) => console.error({error}));
    };

    const onLocationSelect = (location: LocationInterface) => {
        setLocation(location);
    };

    const onSearch = (): void => {
        if (!location) {
            return;
        }

        getForecast(location);
    };

    const getForecast = (location: LocationInterface) => {
        fetch(
            `${BASE_URL}/data/2.5/forecast?q=${location.name}&appid=${process.env.REACT_APP_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                const forecastData = {
                    ...data.city,
                    list: data.list.slice(0, 16),
                };

                setForecast(forecastData);
            })
            .catch((error) => console.error({error}));
    };

    useEffect(() => {
        if (location) {
            setInput(location.name);
            setLocations([]);
        }
    }, [location]);

    return (
        <>
            <Header/>
            <Search
                city={input}
                locations={locations}
                onInputChange={onInputChange}
                onLocationSelect={onLocationSelect}
                onSearch={onSearch}
            />

            {forecast && (
                <div className='center'>
                    <div>
                        <h1>{forecast.name}, {forecast.country}</h1>
                        <h1>{Math.round(forecast.list[0].main.temp - 273.15)}<sup>o</sup></h1>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
