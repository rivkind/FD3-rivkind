"use strict";
require("babel-polyfill");

import { SEARCH_SET } from '../constants/constants';

const newSearchWord = (word) => async dispatch =>  {
    dispatch({
        type: SEARCH_SET,
        preload:word,
    });
}

export {
    newSearchWord,
}