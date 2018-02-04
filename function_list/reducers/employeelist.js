"use strict";

import {  EMPLOYEE_CHANGE_DATA, EMPLOYEE_CHANGE_COMPANY, EMPLOYEE_CHANGE_SORT, EMPLOYEE_CHANGE_TOOLTIP,EMPLOYEE_CHANGE_ACTIVE_PAGE,EMPLOYEE_CHANGE_ITEM_PAGE } from '../constants/constants';

const initState={

  employee: [],
  company: '',
  sortName: '',
  sortDirection: '',
  tooltip: 0,
  tooltipX:0,
  tooltipY:0,
  itemPage:15,
  activePage:1,
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
    case EMPLOYEE_CHANGE_SORT: {
      let newState={...state,
        sortName:action.preload,
        sortDirection:action.direction,
      };
      return newState;
    }
    case EMPLOYEE_CHANGE_TOOLTIP: {
      let newState={...state,
        tooltip:action.preload,
        tooltipX:action.x,
        tooltipY:action.y,
      };
      return newState;
    }
    case EMPLOYEE_CHANGE_ACTIVE_PAGE: {
      let newState={...state,
        activePage:action.preload,
      };
      return newState;
    }
    case EMPLOYEE_CHANGE_ITEM_PAGE: {
      let newState={...state,
        itemPage:action.preload,
        activePage:1,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default employeeListReducer;