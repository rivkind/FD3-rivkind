"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import FunctionList from './components/FunctionList/FunctionList';
import EmployeeList from './components/EmployeeList/EmployeeList';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import Profile from './components/Profile/Profile';
import BirthdayList from './components/BirthdayList/BirthdayList';
import NotFound from './components/NotFound/NotFound';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {




ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <FunctionList>
      <Switch>
        <Route path="/" exact component={EmployeeList} />
        <Route path="/lifetech" component={EmployeeList} />
        <Route path="/search/:searchword" component={EmployeeList} />
        <Route path="/employee/:id" component={Profile} />
        <Route path="/birthday" component={BirthdayList} />
        <Route path="*" component={NotFound} />
        </Switch>
      </FunctionList>
    </HashRouter>
  </Provider>
, document.getElementById('container') );
