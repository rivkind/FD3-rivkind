import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import languageReducer from "./language";
import functionListReducer from "./functionlist";
import employeeListReducer from "./employeelist";
import settingListReducer from "./settinglist";
import filterListReducer from "./filterlist";
import searchReducer from "./search";

let combinedReducer=combineReducers({
    routing: routerReducer,
    functionlist: functionListReducer,
    employeelist: employeeListReducer,
    settinglist: settingListReducer,
    filterlist: filterListReducer,
    language: languageReducer,
    search: searchReducer,
    // + другие редьюсеры
});

export default combinedReducer;
