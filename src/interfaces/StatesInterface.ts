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

export interface ForecastsStateInterface {
    forecasts: ForecastInterface[],
}

export interface IsVisibleLanguagesStateInterface {
    isVisibleLanguages: boolean,
}
