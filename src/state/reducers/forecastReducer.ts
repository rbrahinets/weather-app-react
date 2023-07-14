import {Action} from '../actions';
import {ActionType} from '../action-types';
import {ForecastStateInterface} from '../../interfaces/StatesInterface';

const initialState: ForecastStateInterface = {
    forecast: null,
};

const reducer = (
    state: ForecastStateInterface = initialState,
    action: Action
): ForecastStateInterface => {
    switch (action.type) {
        case ActionType.SET_FORECAST:
            return {
                ...state,
                forecast: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
