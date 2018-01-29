"use strict";


import { EMPLOYEE_CHANGE_DATA, EMPLOYEE_CHANGE_COMPANY } from '../constants/constants';

const prepareData = (data,company,search=null) => async dispatch => {
    var new_data = [];
    if(company=='search'){
        new_data = data.filter(employee => employee.search.toLowerCase().indexOf(search.toLowerCase())!=-1);
    }
    else{
        new_data = data.filter(employee => employee.company == company);
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

export {
    prepareData, changeCompany
}