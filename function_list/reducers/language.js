"use strict";

import { LANGUAGE_CREATE,LANGUAGE_FINISHED,LANGUAGE_CHANGE } from '../constants/constants';

const initState={

  // ключ - идентификатор счётчика, значение - число нажатий
  lang: 'eng',

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function languageReducer(state=initState,action) {
  switch (action.type) {

    case LANGUAGE_CREATE: {
      // надо создать новый счётчик
      // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        lang:{...state.lang,
          lang:'ru'
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    case LANGUAGE_FINISHED: {
      // надо создать новый счётчик
      // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        lang:{...state.lang,
          lang:action.preload
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    case LANGUAGE_CHANGE: {
      // надо создать новый счётчик
      // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        //lang:action.preload,
        lang:action.preload,
          
        
      };
      
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default languageReducer;
