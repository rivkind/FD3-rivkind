import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import languageReducer from "./language";
import functionListReducer from "./functionlist";
import settingListReducer from "./settinglist";
import filterListReducer from "./filterlist";

let combinedReducer=combineReducers({
    routing: routerReducer,
    functionlist: functionListReducer,
    settinglist: settingListReducer,
    filterlist: filterListReducer,
    language: languageReducer,
    // + другие редьюсеры
});

export default combinedReducer;
