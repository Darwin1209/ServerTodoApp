export function setTodo(task) {
  return {
    type: "SET_TODO",
    payload: task
  };
}

export function setFilter(filt) {
  return {
    type: "SET_FILTER",
    payload: filt
  };
}

export function setTerm(term) {
  return {
    type: "SET_TERM",
    payload: term
  };
}

export function deleteItem(id) {
  return {
    type: "DELETE_ITEM",
    payload: id
  };
}

export function doneItem(id) {
  return {
    type: "TOOGLE_DONE",
    payload: id
  };
}

export function importantItem(id) {
  return {
    type: "TOOGLE_IMPORTANT",
    payload: id
  };
}

export function itemsHasErrored(bool) {
  return {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      items
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(itemsFetchDataSuccess(items)))
          .catch(() => dispatch(itemsHasErrored(true)));
  };
}
