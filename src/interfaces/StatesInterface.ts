import {LocationInterface} from './LocationInterface';

export interface InputStateInterface {
    input: string,
}

export interface LocationsStateInterface {
    locations: LocationInterface[],
}

export interface LocationStateInterface {
    location: LocationInterface | null,
}
