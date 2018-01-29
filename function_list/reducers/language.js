"use strict";

import { LANGUAGE_CHANGE } from '../constants/constants';

const initState={

  lang: '',

}


function languageReducer(state=initState,action) {
  
  switch (action.type) {
    case LANGUAGE_CHANGE: {
      let newState={...state,
        lang:action.preload,
      };
      return newState;
    }
    default:
      return state;
  }
}

export default languageReducer;
