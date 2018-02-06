import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/employeelist';
import { EMPLOYEE_CHANGE_ITEM_PAGE,  EMPLOYEE_CHANGE_ACTIVE_PAGE, EMPLOYEE_CHANGE_SORT } from '../constants/constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('employeelist actions', () => {
    it('action changeItemPage', () => {

        const expectedActions = [
            { type: EMPLOYEE_CHANGE_ITEM_PAGE, preload: '25' }
        ]
        const store = mockStore({ itemPage:15 })
    
        return store.dispatch(actions.changeItemPage('25')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })


        
    });

    it('action changeActivePage', () => {
        
        const expectedActions = [
            { type: EMPLOYEE_CHANGE_ACTIVE_PAGE, preload: '2' }
        ]
        const store = mockStore({ activePage:1 })
    
        return store.dispatch(actions.changeActivePage('2')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })


        
    });

    it('action changeSort', () => {
        
        const expectedActions = [
            { type: EMPLOYEE_CHANGE_SORT, preload: 'surname', direction: 'desc' }
        ]
        const store = mockStore({ sortName: '',sortDirection: '' })
    
        return store.dispatch(actions.changeSort('surname','desc')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })


        
    });
    
})