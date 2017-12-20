"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import InternetShop from './components/InternetShop';

let headersArr = [
  'Title','Description','Cost'
];
let itemsArr=require('./items.json');

ReactDOM.render(
  <InternetShop 
    headers={headersArr}
    items={itemsArr}
  />
  , document.getElementById('container') 
);

