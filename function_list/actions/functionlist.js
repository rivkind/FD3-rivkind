"use strict";
import {default as isoFetch} from 'isomorphic-fetch';
require("babel-polyfill");

import { FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,LANGUAGE_CHANGE } from '../constants/constants';


const fetchData = (lang) => async dispatch => {
  dispatch({type: FETCH_DATA_START})
  isoFetch("https://openball.org/lang.php?lang="+lang, {
    method: 'post',
  }).then( (response) => {
    
      if (!response.ok) {
          let Err=new Error("fetch error " + response.status);
          Err.userMessage="Ошибка связи";
          throw Err;
      }
      else
          return response.json();
  }).then( (data) => {
      try {
        if (localStorage.getItem('settings') !== null) {
            var settings = JSON.parse(localStorage.getItem('settings'));
        }else{
            var settings = [true,true,true,true,true,true,true,true];
            localStorage.setItem('settings', JSON.stringify(settings));
        }
        
        dispatch({
          type: FETCH_DATA_SUCCESS,
          data:data.employee,
          title:data.title,
          data_view:data.employee,
          lang:data.lang,
          settings:settings,
          company:null
        })
       

        
        //return data
          //this.fetchSuccess(data);
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