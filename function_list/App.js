"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { routerMiddleware } from 'react-router-redux';
//require('es6-promise').polyfill();
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'

import combinedReducer from './reducers/index.js';

import FunctionList from './components/FunctionList/FunctionList';
import EmployeeList from './components/EmployeeList/EmployeeList';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import PageLife from './pages/PageLife';
import PageLifetech from './pages/PageLifetech';
import Page_EA from './pages/Page_EA';
import Page_Group from './pages/Page_Group';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {


const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(combinedReducer, composeWithDevTools(
  applyMiddleware(thunk,middleware)
))

//let store=createStore(combinedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
      <HeaderBlock />
      <Route path="/" exact component={FunctionList} />
        <Route path="/lifetech" component={FunctionList} />
        <Route path="/search/:searchword" component={FunctionList} />
        <Route path="/group" component={Page_Group} />
        <Route path="/external_accounts" component={Page_EA} />
        <EmployeeList />
      </div>
    </Router>
  </Provider>
, document.getElementById('container') );
