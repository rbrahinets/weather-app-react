import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';

const App: React.FC = () => {
    const [city, setCity] = useState<string>('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        setCity(event.target.value);

        if (value !== '') {
            console.log(value);
        }
    };

    return (
        <>
            <Header/>
            <Search/>
        </>
    );
}

export default App;
