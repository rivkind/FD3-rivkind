"use strict";

import { SETTINGS_SET, SETTINGS_CHANGE_VISIBLE } from '../constants/constants';

const getSettings = () => async dispatch =>  {
    try { 
        var settings = [true,true,true,true,true,true,true,true];

        (localStorage.getItem('settings') !== null)
        ?
        settings = JSON.parse(localStorage.getItem('settings'))
        :
        localStorage.setItem('settings', JSON.stringify(settings));
        
        dispatch({
            type: SETTINGS_SET,
            preload:settings,
        });
    }
    catch ( error ){
        //this.fetchError(error.message);
    }
}

const changeVisibleSettings = (window) => dispatch =>  {
    dispatch({
        type: SETTINGS_CHANGE_VISIBLE,
        preload:!window,
    });
}

const saveSettingsAction = (data,window) => dispatch => {
    localStorage.setItem('settings', JSON.stringify(data));
    dispatch({
        type: SETTINGS_SET,
        preload:data,
    });
    dispatch({
        type: SETTINGS_CHANGE_VISIBLE,
        preload:!window,
    });
}

export {
    getSettings,
    changeVisibleSettings,
    saveSettingsAction,
}