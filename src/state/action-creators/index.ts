import {Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {Action} from '../actions';

export const setInput = (input: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_INPUT,
            payload: input,
        });
    };
};
