"use strict";

import {  SETTINGS_CHANGE_VISIBLE } from '../constants/constants';

const initState={
    isSettings: false,
}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function settingListReducer(state=initState,action) {
  switch (action.type) {

    case SETTINGS_CHANGE_VISIBLE: {
      let newState={...state,
        isSettings:action.preload
      };
      return newState;
    }
    default:
      return state;
  }
}

export default settingListReducer;