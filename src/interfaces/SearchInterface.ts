import {ChangeEvent} from 'react';
import {LocationInterface} from './LocationInterface';

export interface SearchInterface {
    city: string;
    locations: LocationInterface[];
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onLocationSelect: (location: LocationInterface) => void;
    onSearch: () => void;
}
