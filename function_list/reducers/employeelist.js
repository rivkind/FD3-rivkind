"use strict";

import {  FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from '../constants/constants';

const initState={

  // ключ - идентификатор счётчика, значение - число нажатий
  employee: [],

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function employeeListReducer(state=initState,action) {
  switch (action.type) {

    case FETCH_DATA_START: {
      
      return state;
    }
    case FETCH_DATA_SUCCESS: {
      
      return state;
    }
    case FETCH_DATA_FAILURE: {
      
      return state;
    }

    default:
      return state;
  }
}

export default employeeListReducer;