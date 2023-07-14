import {ActionType} from '../action-types';
import {LocationInterface} from '../../interfaces/LocationInterface';
import {ForecastInterface} from '../../interfaces/ForecastInterface';

interface SetInputAction {
    type: ActionType.SET_INPUT
    payload: string;
}

interface SetLocationsAction {
    type: ActionType.SET_LOCATIONS
    payload: LocationInterface[];
}

interface SetLocationAction {
    type: ActionType.SET_LOCATION;
    payload: LocationInterface | null;
}

interface SetForecastAction {
    type: ActionType.SET_FORECAST;
    payload: ForecastInterface | null;
}

export type Action = SetInputAction
    | SetLocationsAction
    | SetLocationAction
    | SetForecastAction;
