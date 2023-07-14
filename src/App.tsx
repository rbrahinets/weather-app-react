import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import {State} from './state';
import useForecast from './hooks/useForecast';
import Header from './components/Header';
import Search from './components/Search';

const App: React.FC = () => {
    const {input} = useSelector((state: State) => state.input);
    const {locations} = useSelector((state: State) => state.locations);
    const {forecast} = useSelector((state: State) => state.forecast);
    const {
        onInputChange,
        onLocationSelect,
        onSearch
    } = useForecast();

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
