﻿"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import FunctionList from './components/FunctionList';
//import PagesRouter from './pages/PagesRouter';
//import PagesLinks from './pages/PagesLinks';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render( 
  <BrowserRouter>
    
    <FunctionList />
    
  </BrowserRouter>
, document.getElementById('container') );
