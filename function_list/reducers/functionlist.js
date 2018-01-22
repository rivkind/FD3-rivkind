"use strict";

import {  FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,EMPLOYEE_CHANGE_DATA } from '../constants/constants';

const initState={
  isLoading: null,
  employee: [],
  title: [],
  view_employee: [],
  settings: [],
  company: 'life',
}


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
        company:action.company
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