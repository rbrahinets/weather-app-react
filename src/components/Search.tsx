import React, {ReactElement, useState} from 'react';
import './Search.css';

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
