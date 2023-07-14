import {Action} from '../actions';
import {ActionType} from '../action-types';
import {LocationStateInterface} from '../../interfaces/StatesInterface';

const initialState: LocationStateInterface = {
    location: null,
};

const reducer = (
    state: LocationStateInterface = initialState,
    action: Action
): LocationStateInterface => {
    switch (action.type) {
        case ActionType.SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
