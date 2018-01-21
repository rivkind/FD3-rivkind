"use strict";
require("babel-polyfill");
//import { fetchData } from './functionlist';
import { LANGUAGE_CREATE,LANGUAGE_FINISHED,LANGUAGE_CHANGE } from '../constants/constants';



/*const language_change = (lang) =>  (dispatch, getState) => {
  //const offset = getRenderedPhonesLength(getState())
  console.log('1');
  dispatch({
    type: LANGUAGE_CHANGE,
    preload:lang,
  })

  
}*/


const language_change=function(lang,empl,title) {
  //console.log(lang);
  //fetchData(lang);
  //console.log(lang);
  //items: store.getState().employee;
  //console.log(items);
  //console.log(story.getState());
  if(lang=='rus'){
    var employee_view = empl.rus;
    var title_view = title.rus;
  }else{
    var employee_view = empl.eng;
    var title_view = title.eng;
  }

  return {
    type: LANGUAGE_CHANGE,
    preload:lang,
    empl:employee_view,
    title:title_view,
  };
}

export {
  language_change,
  
}
