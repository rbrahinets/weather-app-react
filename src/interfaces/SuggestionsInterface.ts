import {LocationInterface} from './LocationInterface';

export interface SuggestionsInterface {
    locations: [];
    onSelect: (location: LocationInterface) => void;
}
