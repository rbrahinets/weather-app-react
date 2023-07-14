import {Action} from '../actions';
import {ActionType} from '../action-types';
import {InputStateInterface} from '../../interfaces/StatesInterface';

const initialState: InputStateInterface = {
    input: '',
};

const reducer = (
    state: InputStateInterface = initialState,
    action: Action
): InputStateInterface => {
    switch (action.type) {
        case ActionType.SET_INPUT:
            return {
                ...state,
                input: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
