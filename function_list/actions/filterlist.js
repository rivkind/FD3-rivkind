"use strict";

import { FILTER_CHANGE_VISIBLE } from '../constants/constants';


const changeVisibleFilter = (window) => dispatch =>  {
    dispatch({
        type: FILTER_CHANGE_VISIBLE,
        preload:!window,
    });
}

export {
    changeVisibleFilter,
}