import React from 'react';
import './Suggestions.css';
import {SuggestionsPropsInterface} from '../interfaces/SuggestionsPropsInterface';
import {LocationInterface} from '../interfaces/LocationInterface';

const Suggestions: React.FC<SuggestionsPropsInterface> = (
    {
        locations,
        onSelect
    }
) => {
    const language: any = localStorage.getItem('i18nextLng');

    return (
        <ul className='list'>
            {locations.map((
                location: LocationInterface,
                index: number
            ) => (
                <li key={location.name + '-' + index}>
                    <button
                        className='item'
                        onClick={() => onSelect(location)}
                    >
                        {location.local_names && location.local_names[language]
                            ? location.local_names[language]
                            : location.name}, {location.country}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Suggestions;
