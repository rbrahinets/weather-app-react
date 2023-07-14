import React from 'react';
import './App.css';
import useForecast from './hooks/useForecast';
import Header from './components/Header';
import Search from './components/Search';

const App: React.FC = () => {
    const {
        input,
        locations,
        forecast,
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
