import languageReducer from '../reducers/language';
import {LANGUAGE_CHANGE} from '../constants/constants'


describe('language reducer', () => {
    it('should return the initial state', () => {
      expect(languageReducer(undefined, {})).toEqual(
        {
          lang: '',
        }
      )
    })

    it('should handle LANGUAGE_CHANGE', () => {
        expect(
            languageReducer([], {
            type: LANGUAGE_CHANGE,
            preload: 'eng',
          })
        ).toEqual(
          {
            lang: 'eng',
          }
        )
    
     })
  
    
  })