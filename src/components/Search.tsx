import React, {ReactElement, useState} from 'react';
import './Search.css';

const Search: () => ReactElement | null = () => {
    const [city, setCity] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleSearch = (): void => {
        console.log(city);
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
                onClick={handleSearch}
            >
                Add
            </button>
        </div>
    );
};

export default Search;
