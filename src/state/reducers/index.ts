import {combineReducers} from 'redux';
import inputReducer from './inputReducer';
import locationReducer from './locationReducer';
import locationsReducer from './locationsReducer';
import forecastReducer from './forecastsReducer';
import isCelsiusReducer from './isCelsiusReducer';

const reducers = combineReducers({
    input: inputReducer,
    locations: locationsReducer,
    location: locationReducer,
    forecasts: forecastReducer,
    isCelsius: isCelsiusReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
