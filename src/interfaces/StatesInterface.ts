import {LocationInterface} from './LocationInterface';
import {ForecastInterface} from './ForecastInterface';

export interface InputStateInterface {
    input: string,
}

export interface LocationsStateInterface {
    locations: LocationInterface[],
}

export interface LocationStateInterface {
    location: LocationInterface | null,
}

export interface ForecastStateInterface {
    forecast: ForecastInterface | null,
}
