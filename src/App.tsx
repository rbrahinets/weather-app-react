import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import {State} from './state';
import useForecast from './hooks/useForecast';
import UserLocation from './components/UserLocation';
import Header from './components/Header';
import Search from './components/Search';
import Forecast from './components/Forecast';
import {ForecastInterface} from './interfaces/ForecastInterface';

const App: React.FC = () => {
    const {input} = useSelector((state: State) => state.input);
    const {locations} = useSelector((state: State) => state.locations);
    const {forecasts} = useSelector((state: State) => state.forecasts);
    const {
        onInputChange,
        onLocationSelect,
        onSearch,
        getForecast
    } = useForecast();
    let currentLocation: any = localStorage.getItem('city');

    useEffect(() => {
        if (currentLocation) {
            getForecast(currentLocation).then();
            currentLocation = null;
        }
    }, [currentLocation]);

    return (
        <>
            <UserLocation/>
            <Header/>
            <Search
                city={input}
                locations={locations}
                onInputChange={onInputChange}
                onLocationSelect={onLocationSelect}
                onSearch={onSearch}
            />
            <div className='forecasts-container'>
                {forecasts.map((forecast: ForecastInterface, index: number) => (
                    <Forecast key={index} forecast={forecast}/>
                ))}
            </div>

        </>
    );
}

export default App;
