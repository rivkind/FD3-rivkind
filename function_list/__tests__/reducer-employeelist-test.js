import employeeListReducer from '../reducers/employeelist';
import { EMPLOYEE_CHANGE_SORT, EMPLOYEE_CHANGE_ACTIVE_PAGE, EMPLOYEE_CHANGE_ITEM_PAGE } from '../constants/constants'


describe('employeelist reducer', () => {
    it('should return the initial state', () => {
      expect(employeeListReducer(undefined, {})).toEqual(
        {
            sortName: '',
            sortDirection: '',
            tooltip: 0,
            tooltipX:0,
            tooltipY:0,
            itemPage:15,
            activePage:1,
        }
      )
    })

    it('should handle EMPLOYEE_CHANGE_SORT', () => {
        expect(
            employeeListReducer([], {
            type: EMPLOYEE_CHANGE_SORT,
            preload: 'surname',
            direction: 'asc',
          })
        ).toEqual(
          {
            sortName: 'surname',
            sortDirection: 'asc',
          }
        )
    
    })
    
    it('should handle EMPLOYEE_CHANGE_ACTIVE_PAGE', () => {
        expect(
            employeeListReducer([], {
            type: EMPLOYEE_CHANGE_ACTIVE_PAGE,
            preload: 2,
          })
        ).toEqual(
          {
            activePage:2,
          }
        )
    
    })

    it('should handle EMPLOYEE_CHANGE_ITEM_PAGE', () => {
        expect(
            employeeListReducer([], {
            type: EMPLOYEE_CHANGE_ITEM_PAGE,
            preload: 25,
          })
        ).toEqual(
          {
            activePage:1,
            itemPage:25,
          }
        )
    
    })
    
  })