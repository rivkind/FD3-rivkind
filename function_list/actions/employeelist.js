"use strict";


import { FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from '../constants/constants';

//import {fetchData as fetchDataApi} from '../api'

const fetchData=function() {
//const fetchData = () => async dispatch => {
  return  {type:FETCH_DATA_START};    




   //console.log('a');
      



    //console.log('as');
    //return {type:FETCH_DATA_START};
    //console.log('a');
    /*dispatch({type: FETCH_DATA_START})
  
    try {
      const phones = await fetchDataApi()
      dispatch({
        type: FETCH_PHONES_SUCCESS,
        payload: phones
      })
    } catch (err) {
      dispatch({
        type: FETCH_PHONES_FAILURE,
        payload: err,
        error: true
      })
    }*/
  }



export {
    fetchData,
  
}