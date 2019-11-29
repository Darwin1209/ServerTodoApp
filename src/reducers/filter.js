const initialState = {
    term: '',
    filter: 'all'
}

export function filterReducer (state = initialState, { type, payload }) {
    switch (type) {
    case 'SET_FILTER':
        return { ...state, filter: payload }
    case 'SET_TERM':
        return { ...state, term: payload }
    default:
        return state
    }
}
