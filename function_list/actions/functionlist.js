"use strict";

import {default as isoFetch} from 'isomorphic-fetch';
require("babel-polyfill");

import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../constants/constants';

const fetchData = (lang,company) => async dispatch => {

    console.log('a');
    dispatch({type: FETCH_DATA_START});
    
    isoFetch("https://openball.org/lang.php?lang="+lang, {
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
            //var data_new = prepareData(data.employee,company);
            dispatch({
                type: FETCH_DATA_SUCCESS,
                data:data.employee,
                title:data.title,
            })
      }
      catch ( error ){
          //this.fetchError(error.message);
      }
  }).catch( (error) => {
      //this.fetchError(error.userMessage||error.message);
  })
}

export {
    fetchData,
}