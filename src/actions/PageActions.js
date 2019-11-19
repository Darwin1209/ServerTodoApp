function postData(url = '', data = {}) {
  return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data), 
  })
  .then(response => response.json());
}

export function setTodo(task) {
  return {
    type: "SET_TODO",
    payload: task
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

export const getTodo = (name) => dispatch => {
  postData('/todoGet', { name })
  .then(data => {
    console.log(data);
    dispatch({ type: "FETCH_TODO_SUCCESS", payload: data});
  })
}

export const setTodoFetch = (name, data) => {
  postData('/todos', { name, data })
  .then(response => {
    console.log(response.json());
  })
}
