"use strict";
require("babel-polyfill");

import { LANGUAGE_CHANGE } from '../constants/constants';


const getLanguage = (lang) => async dispatch =>  {
  try { 
    var lang_old = lang;
    var lang = lang;
    (localStorage.getItem('language') !== null)
    ?
    lang = localStorage.getItem('language')
    :
    localStorage.setItem('language', lang);
    
    if(lang_old != lang){
      dispatch({
        type: LANGUAGE_CHANGE,
        preload:lang,
      });
    }
  }
  catch ( error ){
      //this.fetchError(error.message);
  }
}

const languageChange = (lang) => dispatch => {

  localStorage.setItem('language', lang);

  dispatch({
    type: LANGUAGE_CHANGE,
    preload:lang,
  });
}

export {

  languageChange,getLanguage,
  
}