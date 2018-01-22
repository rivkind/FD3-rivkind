"use strict";

import {  FILTER_CHANGE_VISIBLE } from '../constants/constants';

const initState={
    isFilter: false,
}

function filterListReducer(state=initState,action) {
  switch (action.type) {

    case FILTER_CHANGE_VISIBLE: {
      let newState={...state,
        isFilter:action.preload
      };
      return newState;
    }
    default:
      return state;
  }
}

export default filterListReducer;