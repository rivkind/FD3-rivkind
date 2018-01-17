"use strict";
import {default as isoFetch} from 'isomorphic-fetch';

import { LANGUAGE_CREATE,LANGUAGE_FINISHED,LANGUAGE_CHANGE } from '../constants/constants';

const language_create=function() {
  return dispatch => {
    return isoFetch(`/json/lang.json`).then(
      response => dispatch({ type: 'LANGUAGE_FINISHED', response }),
      //error => dispatch({ type: 'SUGGESTIONS_ERROR', error })
    )
  };
  /*return {
    type: LANGUAGE_CREATE,
    
  };
  return dispatch => {
    dispatch({type: LANGUAGE_CREATE,})
    return isoFetch(`/json/lang.json`)
      .then(response => response.json())
      .then(json => dispatch({type:LANGUAGE_FINISHED,preload:json}))
  };*/
}

const language_change=function(lang) {
  console.log(lang);
  return {
    type: LANGUAGE_CHANGE,
    preload:lang,
    
  };
}

export {
  language_create,language_change,
  
}
