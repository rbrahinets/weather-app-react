import React from 'react';
import './Search.css';
import {SearchInterface} from '../interfaces/SearchInterface';

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
