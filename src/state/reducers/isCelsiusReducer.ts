import {Action} from '../actions';
import {ActionType} from '../action-types';
import {IsCelsiusStateInterface} from '../../interfaces/StatesInterface';

const initialState: IsCelsiusStateInterface = {
    isCelsius: true,
};

const reducer = (
    state: IsCelsiusStateInterface = initialState,
    action: Action
): IsCelsiusStateInterface => {
    switch (action.type) {
        case ActionType.SET_IS_CELSIUS:
            return {
                ...state,
                isCelsius: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
