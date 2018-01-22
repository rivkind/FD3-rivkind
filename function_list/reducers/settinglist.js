"use strict";

import {  SETTINGS_CHANGE_VISIBLE, SETTINGS_SET } from '../constants/constants';

const initState={
    isSettings: false,
    settings: [],
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

    case SETTINGS_SET: {
      let newState={...state,
        settings:action.preload
      };
      return newState;
    }

    default:
      return state;
  }
}

export default settingListReducer;