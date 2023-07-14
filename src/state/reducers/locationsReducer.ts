import {Action} from '../actions';
import {ActionType} from '../action-types';
import {LocationsStateInterface} from '../../interfaces/StatesInterface';

const initialState: LocationsStateInterface = {
    locations: [],
};

const reducer = (
    state: LocationsStateInterface = initialState,
    action: Action
): LocationsStateInterface => {
    switch (action.type) {
        case ActionType.SET_LOCATIONS:
            return {
                ...state,
                locations: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
