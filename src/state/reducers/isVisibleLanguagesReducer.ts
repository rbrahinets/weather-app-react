import {Action} from '../actions';
import {ActionType} from '../action-types';
import {IsVisibleLanguagesStateInterface} from '../../interfaces/StatesInterface';

const initialState: IsVisibleLanguagesStateInterface = {
    isVisibleLanguages: false,
};

const reducer = (
    state: IsVisibleLanguagesStateInterface = initialState,
    action: Action
): IsVisibleLanguagesStateInterface => {
    switch (action.type) {
        case ActionType.SET_IS_VISIBLE_LANGUAGES:
            return {
                ...state,
                isVisibleLanguages: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
