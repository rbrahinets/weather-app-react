import React, {ReactElement, useState} from 'react';
import './Search.css';

    const onInputChange = (): void => {
        console.log(city);
    };

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
