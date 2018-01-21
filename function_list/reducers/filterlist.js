"use strict";

import {  FILTER_CHANGE_VISIBLE } from '../constants/constants';

const initState={
    isFilter: false,
}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

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