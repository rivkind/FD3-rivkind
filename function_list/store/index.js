import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import { hashHistory } from 'react-router-dom';
import combinedReducer from '../reducers/index.js';
//import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const history = createHistory(hashHistory);
const middleware = routerMiddleware(history);

//const store = createStore(combinedReducer, composeWithDevTools(
 //   applyMiddleware(thunk,middleware)
//))
const store = createStore(combinedReducer, 
   applyMiddleware(thunk,middleware)
)
export default store;