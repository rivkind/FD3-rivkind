import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import languageReducer from "./language";
import employeeListReducer from "./employeelist";

let combinedReducer=combineReducers({
    // редьюсер counterButtonReducer отвечает за раздел state под именем counterButton
    routing: routerReducer,
    language: languageReducer, 
    employee: employeeListReducer,
    // + другие редьюсеры
});

export default combinedReducer;
