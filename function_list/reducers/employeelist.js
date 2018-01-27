"use strict";

import {  EMPLOYEE_CHANGE_DATA } from '../constants/constants';

const initState={

  employee: [],
  company: "life",

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function employeeListReducer(state=initState,action) {
  switch (action.type) {

    case EMPLOYEE_CHANGE_DATA: {
      let newState={...state,
        employee:action.preload,
        company:action.company,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default employeeListReducer;