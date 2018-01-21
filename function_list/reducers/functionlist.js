"use strict";

import {  FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,SETTINGS_CHANGE,EMPLOYEE_CHANGE_DATA } from '../constants/constants';

const initState={

  isLoading: null,
  employee: [],
  title: [],
  view_employee: [],
  lang: null,
  settings: [],
}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function functionListReducer(state=initState,action) {
  switch (action.type) {

    case FETCH_DATA_START: {
      let newState={...state,
        isLoading:true
      };
      return newState;
    }
    case FETCH_DATA_SUCCESS: {
      let newState={...state,
        employee:action.data,
        title:action.title,
        view_employee:action.data_view,
        isLoading:false,
        lang:action.lang,
        settings:action.settings,
        company:''
      };
      return newState;
    }
    case SETTINGS_CHANGE: {
      let newState={...state,
        settings:action.preload
      };
      return newState;
    }
    case EMPLOYEE_CHANGE_DATA: {
      let newState={...state,
        view_employee:action.preload,
        company:action.company,
      };
      return newState;
    }
    case FETCH_DATA_FAILURE: {
      
      return state;
    }
    

    default:
      return state;
  }
}

export default functionListReducer;