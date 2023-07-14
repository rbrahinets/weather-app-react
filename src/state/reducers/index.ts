import {combineReducers} from 'redux';
import inputReducer from './inputReducer';
import locationReducer from './locationReducer';
import locationsReducer from './locationsReducer';
import forecastReducer from './forecastReducer';

const reducers = combineReducers({
    input: inputReducer,
    locations: locationsReducer,
    location: locationReducer,
    forecast: forecastReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
