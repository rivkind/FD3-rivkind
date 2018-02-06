import functionListReducer from '../reducers/functionlist';
import { FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from '../constants/constants'


describe('employeelist reducer', () => {
    it('should return the initial state', () => {
      expect(functionListReducer(undefined, {})).toEqual(
        {
            isLoading: true,
            isError: false,
            employee: [],
            title: [],
            position: [],
            unit: [],
            team: [],
        }
      )
    })

    it('should handle FETCH_DATA_START', () => {
        expect(
            functionListReducer([], {
            type: FETCH_DATA_START,
            
          })
        ).toEqual(
          {
            isLoading:true,
          }
        )
    
    })
    
    it('should handle FETCH_DATA_FAILURE', () => {
        expect(
            functionListReducer([], {
            type: FETCH_DATA_FAILURE,
            
          })
        ).toEqual(
          {
            isError:true,
            isLoading:false,
          }
        )
    
    })

    it('should handle FETCH_DATA_SUCCESS', () => {
        expect(
            functionListReducer([], {
            type: FETCH_DATA_SUCCESS,
            data: ["a","b","c"],
            title: ["a","b","c"],
            position: ["a","b","c"],
            unit: ["a","b","c"],
            team: ["a","b","c"],
          })
        ).toEqual(
          {
            employee: ["a","b","c"],
            title: ["a","b","c"],
            position: ["a","b","c"],
            unit: ["a","b","c"],
            team: ["a","b","c"],
            isLoading:false,
          }
        )
    
    })
    
    
  })