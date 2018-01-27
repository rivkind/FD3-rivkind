"use strict";

import {  SEARCH_SET } from '../constants/constants';

const initState={
    search: null,
}

function searchReducer(state=initState,action) {
  switch (action.type) {

    case SEARCH_SET: {
      let newState={...state,
        search:action.preload
      };
      return newState;
    }
    default:
      return state;
  }
}

export default searchReducer;