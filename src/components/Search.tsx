import React from 'react';
import './Search.css';
import {useTranslation} from 'react-i18next';
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
    const {t} = useTranslation();

    return (
        <div className='center'>
            <div className='search-container'>
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
                    {t('add')}
                </button>
            </div>
        </div>
    );
};

export default Search;
