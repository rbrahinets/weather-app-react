import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import {State} from './state';
import useForecast from './hooks/useForecast';
import Header from './components/Header';
import Search from './components/Search';
import Forecast from './components/Forecast';

const App: React.FC = () => {
    const {input} = useSelector((state: State) => state.input);
    const {locations} = useSelector((state: State) => state.locations);
    const {forecasts} = useSelector((state: State) => state.forecasts);
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
                    <Forecast forecast={forecast}/>
                </div>
            )}
        </>
    );
}

export default App;
