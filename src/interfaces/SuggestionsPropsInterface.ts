import {LocationInterface} from './LocationInterface';

export interface SuggestionsPropsInterface {
    locations: LocationInterface[];
    onSelect: (location: LocationInterface) => void;
}
