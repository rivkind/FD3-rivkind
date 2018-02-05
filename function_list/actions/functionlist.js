"use strict";

import {default as isoFetch} from 'isomorphic-fetch';
require("babel-polyfill");

import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../constants/constants';

const fetchData = (lang) => async dispatch => {

    dispatch({type: FETCH_DATA_START});
    
    isoFetch("https://life.com.by/lang.php?lang="+lang, {
        method: 'post',
    }).then( (response) => {
    
      if (!response.ok) {
          let Err=new Error("fetch error " + response.status);
          Err.userMessage="Ошибка связи";
          throw Err;
      }else
          return response.json();

    }).then( (data) => {

        try {
            var position = data.position.sort(function(obj1, obj2) {
                if (obj1.name < obj2.name) return -1;
                if (obj1.name > obj2.name) return 1;
                return 0;
            });
            var unit = data.unit.sort(function(obj1, obj2) {
                if (obj1.name < obj2.name) return -1;
                if (obj1.name > obj2.name) return 1;
                return 0;
            });
            var team = data.gr.sort(function(obj1, obj2) {
                if (obj1.name < obj2.name) return -1;
                if (obj1.name > obj2.name) return 1;
                return 0;
            });
            var employee = data.employee.sort(function(obj1, obj2) {
                if (obj1.surname < obj2.surname) return -1;
                if (obj1.surname > obj2.surname) return 1;
                return 0;
            });

            dispatch({
                type: FETCH_DATA_SUCCESS,
                data:employee,
                title:data.title,
                position:position,
                unit:unit,
                team:team,
            })
      }
      catch ( error ){
          console.log('Ошибка связи');
          //this.fetchError(error.message);
      }
  }).catch( (error) => {
    console.log('Ошибка связи2');
      //this.fetchError(error.userMessage||error.message);
  })
}

export {
    fetchData,
}