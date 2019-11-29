export function setFilter (filt) {
    return {
        type: 'SET_FILTER',
        payload: filt
    }
}

export function setTerm (term) {
    return {
        type: 'SET_TERM',
        payload: term
    }
}
