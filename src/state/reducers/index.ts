import {combineReducers} from 'redux';
import inputReducer from './inputReducer';
import locationReducer from './locationReducer';
import locationsReducer from './locationsReducer';
import forecastReducer from './forecastsReducer';
import isVisibleLanguagesReducer from './isVisibleLanguagesReducer';

const reducers = combineReducers({
    input: inputReducer,
    locations: locationsReducer,
    location: locationReducer,
    forecasts: forecastReducer,
    isVisibleLanguages: isVisibleLanguagesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
