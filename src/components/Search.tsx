import React from 'react';
import './Search.css';
import {SearchPropsInterface} from '../interfaces/SearchPropsInterface';
import Suggestions from './Suggestions';

const Search: React.FC<SearchPropsInterface> = (
    {
        city,
        locations,
        onInputChange,
        onLocationSelect,
        onSearch
    }
) => {
    return (
        <div className='center'>
            <div className='container'>
                <div className='input-container'>
                    <input
                        className='input'
                        type='text'
                        value={city}
                        onChange={onInputChange}
                    />
                    <Suggestions
                        locations={locations}
                        onSelect={onLocationSelect}
                    />
                </div>
                <button
                    className='button'
                    onClick={onSearch}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default Search;
