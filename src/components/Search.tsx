import React from 'react';
import './Search.css';
import {SearchInterface} from '../interfaces/SearchInterface';
import {LocationInterface} from '../interfaces/LocationInterface';

const Search: React.FC<SearchInterface> = (
    {
        city,
        locations,
        onInputChange,
        onLocationSelect,
        onSearch
    }
) => {
    return (
        <div className='container'>
            <input
                className='input'
                type='text'
                value={city}
                onChange={onInputChange}
            />
            <ul className='list'>
                {locations.map((location: LocationInterface, index: number) => (
                    <li key={location.name + '-' + index}>
                        <button
                            className='item'
                            onClick={() => onLocationSelect(location)}
                        >
                            {location.name}, {location.country}
                        </button>
                    </li>
                ))}
            </ul>
            <button
                className='button'
                onClick={onSearch}
            >
                Add
            </button>
        </div>
    );
};

export default Search;
