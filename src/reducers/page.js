const initialState = {
    todoData: [
        "aaaa",
    ],
    term : '',
    filter: 'all',
}

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TODO':
            return { ...state, todoData: state.todoData.push(action.payload)};
        case 'SET_FILTER':
            return { ...state, filter: action.payload};
        case 'SET_TERM':
            return { ...state, term: action.payload};

        default:
            return state;
    }
}
