import React, {useState} from 'react';
import './App.css';
import {LocationInterface} from './interfaces/LocationInterface';
import Header from './components/Header';
import Search from './components/Search';

const BASE_URL: string = 'https://api.openweathermap.org';

const App: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [locations, setLocations] = useState<[]>([]);
    const [location, setLocation] = useState<LocationInterface | null>(null);

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

        console.log(location);
    };

    return (
        <>
            <Header/>
            <Search/>
        </>
    );
}

export default App;
