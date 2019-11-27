import { pageReducer, initialState } from '../reducers/page';

describe('pageRecucer', () => {
    it('test setTodo', () => {
        const action = {
            type: 'SET_TODO',
            payload: [1, 2, 3],
        }
        expect(pageReducer(initialState, action)).toEqual({
            ...initialState,
            todoData: [1, 2, 3],
        });
    })
})