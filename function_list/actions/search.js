"use strict";

import { SEARCH_SET } from '../constants/constants';


const newSearchWord = (word) => dispatch =>  {
    dispatch({
        type: SEARCH_SET,
        preload:word,
    });
}

export {
    newSearchWord,
}