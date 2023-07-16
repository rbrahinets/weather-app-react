import {Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {Action} from '../actions';
import {LocationInterface} from '../../interfaces/LocationInterface';
import {ForecastInterface} from '../../interfaces/ForecastInterface';

export const setInput = (input: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_INPUT,
            payload: input,
        });
    };
};

export const setLocations = (locations: LocationInterface[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_LOCATIONS,
            payload: locations,
        });
    };
};

export const setLocation = (location: LocationInterface | null) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_LOCATION,
            payload: location,
        });
    };
};

export const setForecast = (forecast: ForecastInterface | null) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_FORECAST,
            payload: forecast,
        });
    };
};

export const updateForecast = (forecast: ForecastInterface | null) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_FORECAST,
            payload: forecast,
        });
    };
};

export const deleteForecast = (forecast: ForecastInterface | null) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_FORECAST,
            payload: forecast,
        });
    };
};

export const setIsCelsius = (isCelsius: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_IS_CELSIUS,
            payload: isCelsius,
        });
    };
};

