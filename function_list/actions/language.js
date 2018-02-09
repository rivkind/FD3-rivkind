"use strict";
require("babel-polyfill");

import { LANGUAGE_CHANGE } from '../constants/constants';


const getLanguage = (lang_start) => async dispatch =>  {
  try { 
    lang='rus';
    
    //var lang_old = lang;
    var lang = lang;
    (localStorage.getItem('language') !== null && localStorage.getItem('language') != 'undefined')
    ?
    lang = localStorage.getItem('language')
    :
    localStorage.setItem('language', lang);

    
    
    if(lang_start ==''){
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

const languageChange = (lang) => async dispatch => {

  localStorage.setItem('language', lang);

  dispatch({
    type: LANGUAGE_CHANGE,
    preload:lang,
  });
}

export {

  languageChange,getLanguage,
  
}
