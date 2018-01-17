"use strict";
import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import createHistory from 'history/createBrowserHistory'

import combinedReducer from './reducers/index.js';

import FunctionList from './components/FunctionList/FunctionList';
import PageLife from './pages/PageLife';
import PageLifetech from './pages/PageLifetech';
import Page_EA from './pages/Page_EA';
import Page_Group from './pages/Page_Group';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

const store = createStore(combinedReducer, composeWithDevTools(
    applyMiddleware(thunk)
))
const history = createHistory();
//const history = syncHistoryWithStore(browserHistory, store)



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <FunctionList>
        <Route path="/" exact component={PageLife} />
        <Route path="/lifetech" component={PageLifetech} />
        <Route path="/group" component={Page_Group} />
        <Route path="/external_accounts" component={Page_EA} />
        </FunctionList>
    </Router>
  </Provider>
, document.getElementById('container') );
