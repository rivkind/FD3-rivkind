import searchReducer from '../reducers/search';
import { SEARCH_SET } from '../constants/constants'


describe('search reducer', () => {
    it('should return the initial state', () => {
      expect(searchReducer(undefined, {})).toEqual(
        {
            search: null,
        }
      )
    })

    it('should handle SEARCH_SET', () => {
        expect(
            searchReducer([], {
            type: SEARCH_SET,
            preload: 'Тест текст',
          })
        ).toEqual(
          {
            search: 'Тест текст',
          }
        )
    
    })
    
    
    
  })