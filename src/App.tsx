import React, {ReactElement, useState} from 'react';
import './App.css';

const App: () => ReactElement | null = () => {
    const [city, setCity] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    return (
        <div className='container'>
            <input
                className='input'
                type="text"
                value={city}
                onChange={handleInputChange}
            />
            <button
                className='button'
            >
                Add
            </button>
        </div>
    );
}

export default App;
