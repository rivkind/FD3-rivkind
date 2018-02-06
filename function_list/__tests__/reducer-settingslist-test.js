import settingListReducer from '../reducers/settinglist';
import { SETTINGS_CHANGE_VISIBLE, SETTINGS_SET } from '../constants/constants'


describe('settinglist reducer', () => {
    it('should return the initial state', () => {
      expect(settingListReducer(undefined, {})).toEqual(
        {
            isSettings: false,
            settings: [],
        }
      )
    })

    it('should handle SETTINGS_CHANGE_VISIBLE', () => {
        expect(
            settingListReducer([], {
            type: SETTINGS_CHANGE_VISIBLE,
            preload: true,
          })
        ).toEqual(
          {
            isSettings: true,
          }
        )
    
    })
    
    it('should handle SETTINGS_SET', () => {
        expect(
            settingListReducer([], {
            type: SETTINGS_SET,
            preload: [true,true,true,false,true],
          })
        ).toEqual(
          {
            settings:  [true,true,true,false,true],
          }
        )
    
    })
    
  })