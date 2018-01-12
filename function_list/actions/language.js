"use strict";

import { LANGUAGE_CREATE } from '../constants/constants';

const language_create=function() {
  return {
    type: LANGUAGE_CREATE,
  };
}

const counterButton_add=function(counterid,addvalue) {
  return {
    type: COUNTER_BUTTON_ADD,
    counterid:counterid,
    addvalue:addvalue,
  };
}

export {
  language_create,
  
}
