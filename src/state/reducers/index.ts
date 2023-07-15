import {combineReducers} from 'redux';
import inputReducer from './inputReducer';
import locationReducer from './locationReducer';
import locationsReducer from './locationsReducer';
import forecastReducer from './forecastReducer';
import isCelsiusReducer from './isCelsiusReducer';

const reducers = combineReducers({
    input: inputReducer,
    locations: locationsReducer,
    location: locationReducer,
    forecast: forecastReducer,
    isCelsius: isCelsiusReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
