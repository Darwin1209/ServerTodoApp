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
    });
    it('test deleteItem', () => {
        const action = {
            type: 'DELETE_ITEM',
            payload: [1, 2, 3],
        }
        expect(pageReducer(initialState, action)).toEqual({
            ...initialState,
            todoData: [1, 2, 3],
        });
    });
    it('test toogle', () => {
        const action = {
            type: 'TOOGLE',
            payload: [1, 2, 3],
        }
        expect(pageReducer(initialState, action)).toEqual({
            ...initialState,
            todoData: [1, 2, 3],
        });
    });
    it('test fetchTodoSuccess', () => {
        const action = {
            type: 'FETCH_TODO_SUCCESS',
            payload: [1, 2, 3],
        }
        expect(pageReducer(initialState, action)).toEqual({
            ...initialState,
            todoData: [1, 2, 3],
        });
    });
    it('test default', () => {
        const action = {
            type: 'Sfaefae',
            payload: [1, 2, 3],
        }
        expect(pageReducer(initialState, action)).toEqual({
            ...initialState
        });
    })
})