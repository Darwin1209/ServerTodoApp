export function setTodo(task) {
    return {
        type: 'SET_TODO',
        payload: task,
    }
}

export function setFilter(filt) {
    return {
        type: 'SET_FILTER',
        payload: filt,
    }
}

export function setTerm(term) {
    return {
        type: 'SET_TERM',
        payload: term,
    }
}

export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        payload: id,
    }
}
