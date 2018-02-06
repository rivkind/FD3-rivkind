import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/search';
import { SEARCH_SET } from '../constants/constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('search actions', () => {
    it('action newSearchWord', () => {

        const expectedActions = [
            { type: SEARCH_SET, preload: '1' }
        ]
        const store = mockStore({ search: null })
    
        return store.dispatch(actions.newSearchWord('1')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })


        
    });
    
})