"use strict";
import { push } from 'react-router-redux';

import { SEARCH_SET } from '../constants/constants';


const newSearchWord = (word) => async dispatch =>  {
    dispatch({
        type: SEARCH_SET,
        preload:word,
    });
    dispatch(push(`/search/`+word));
}

export {
    newSearchWord,
}