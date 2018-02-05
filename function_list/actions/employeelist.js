"use strict";
require("babel-polyfill");

import { EMPLOYEE_CHANGE_DATA, EMPLOYEE_CHANGE_COMPANY, EMPLOYEE_CHANGE_SORT, EMPLOYEE_CHANGE_TOOLTIP, EMPLOYEE_CHANGE_ACTIVE_PAGE, EMPLOYEE_CHANGE_ITEM_PAGE } from '../constants/constants';

const compareValues = (key, order='asc') => {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
          return 0; 
      }
  
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }

const prepareData = (data,company,search=null,sort_name=null,direction=null) => async dispatch => {
    
    var new_data = [];
    if(company=='search'){
        console.log('a');
        new_data = data.filter(employee => employee.search.toLowerCase().indexOf(search.toLowerCase())!=-1);
        new_data = new_data.sort(compareValues('surname'));
    }
    else{
        new_data = data.filter(employee => employee.company == company);
    }
    if(sort_name!=null || direction!=null){
        
        new_data = new_data.sort(compareValues(sort_name,direction)); 
    }
    dispatch({
        type: EMPLOYEE_CHANGE_DATA,
        preload:new_data,
        company:company,
    })
    
}


const changeCompany = (company) => async dispatch => {
    dispatch({
        type: EMPLOYEE_CHANGE_COMPANY,
        preload:company,
    })
    
}

const tooltipVisible = (id,x,y) => async dispatch => {
    dispatch({
        type: EMPLOYEE_CHANGE_TOOLTIP,
        preload:id,
        x:(x+20),
        y:(y-100),
    })
    
}

const changeSort = (name,direction) => async dispatch => {
    dispatch({
        type: EMPLOYEE_CHANGE_SORT,
        preload:name,
        direction:direction,
    })
    
}

const changeActivePage = (page) => async dispatch =>  {
    dispatch({
        type: EMPLOYEE_CHANGE_ACTIVE_PAGE,
        preload:page,
    }) 
}

const changeItemPage = (page) => dispatch =>  {
    dispatch({
        type: EMPLOYEE_CHANGE_ITEM_PAGE,
        preload:page,
    }) 
}

export {
    prepareData, changeCompany,changeSort, tooltipVisible, changeActivePage, changeItemPage
}