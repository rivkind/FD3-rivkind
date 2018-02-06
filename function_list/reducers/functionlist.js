"use strict";

import {  FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from '../constants/constants';

const initState={
  isLoading: true,
  isError: false,
  employee: [],
  title: [],
  position: [],
  unit: [],
  team: [],
  //company: 'life',
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
        position:action.position,
        unit:action.unit,
        team:action.team,
        isLoading:false,
      };
      return newState;
    }

    case FETCH_DATA_FAILURE: {
      let newState={...state,
        isError:true,
        isLoading:false,
      };
      return newState;
    }
    

    default:
      return state;
  }
}

export default functionListReducer;