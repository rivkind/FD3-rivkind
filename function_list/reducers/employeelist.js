"use strict";

import {  EMPLOYEE_CHANGE_DATA, EMPLOYEE_CHANGE_COMPANY } from '../constants/constants';

const initState={

  employee: [],
  company: '',
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
    case EMPLOYEE_CHANGE_COMPANY: {
      let newState={...state,
        company:action.preload,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default employeeListReducer;