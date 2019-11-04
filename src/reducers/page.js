const initialState = {
    todoData: [{label: "Добавьте свою задачу!", important: false, done: false, id: 100}],
    term : '',
    filter: 'all',
}

export function pageReducer(state = initialState, {type, payload}) {
    switch (type) {
        case 'SET_TODO':
            let array = state.todoData;
            array.push(payload);
            return { ...state, todoData: array};
        case 'SET_FILTER':
            return { ...state, filter: payload};
        case 'SET_TERM':
            return { ...state, term: payload};
        case 'DELETE_ITEM':
            let idx = state.todoData.findIndex ((el) => el.id === payload);
            const newArray = [
                ...state.todoData.slice (0, idx),
                ...state.todoData.slice (idx + 1)
            ];
            return { ...state, todoData: newArray };
        case 'TOOGLE_DONE':
            const arrayDone = state.todoData;
            let idDone = arrayDone.findIndex( (el) => el.id === payload)
            arrayDone[idDone]['done'] = !arrayDone[idDone]['done'];
            return { ...state, todoData: arrayDone };
        case 'TOOGLE_IMPORTANT':
            const arrayImportant = state.todoData;
            let idImportant = arrayImportant.findIndex( (el) => el.id === payload)
            arrayImportant[idImportant]['important'] = !arrayImportant[idImportant]['important'];
            return { ...state, todoData: arrayImportant };
        default:
            return state;
    }
}
