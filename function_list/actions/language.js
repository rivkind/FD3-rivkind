"use strict";

import { LANGUAGE_CHANGE } from '../constants/constants';


const languageChange = (lang) => dispatch => {
  dispatch({
    type: LANGUAGE_CHANGE,
    preload:lang,
  });
}

export {

  languageChange,
  
}
