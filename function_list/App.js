"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,HashRouter } from 'react-router-dom';
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
import Profile from './components/Profile/Profile';
import BirthdayList from './components/BirthdayList/BirthdayList';


// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {


const history = createHistory(hashHistory)
const middleware = routerMiddleware(history)

const store = createStore(combinedReducer, composeWithDevTools(
  applyMiddleware(thunk,middleware)
))

//let store=createStore(combinedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <HeaderBlock />
        <Route path="/" exact component={EmployeeList} />
        <Route path="/lifetech" component={EmployeeList} />
        <Route path="/search/:searchword" component={EmployeeList} />
        <Route path="/employee/:id" component={Profile} />
        <Route path="/birthday" component={BirthdayList} />
      </div>
    </HashRouter>
  </Provider>
, document.getElementById('container') );
