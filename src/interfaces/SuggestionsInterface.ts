import {LocationInterface} from './LocationInterface';

export interface SuggestionsInterface {
    locations: LocationInterface[];
    onSelect: (location: LocationInterface) => void;
}
