function postData(url = '', data = {}) {
  // Значения по умолчанию обозначены знаком *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
    .then(response => response.json()) // парсит JSON ответ в Javascript объект
    .catch((e)=>console.error(e))
  }


export function setTodo(task) {
  return (dispatch,getState) =>{
    const { user } = getState();
    let newArray = getState().page.todoData;
    newArray.push(task);
    dispatch( setTodoFetch(user.name, newArray));
    dispatch({
      type: 'SET_TODO',
      payload: newArray
    })
  }
}

export function deleteItem(id) {
  return (dispatch,getState) =>{
    const { user } = getState();
    let newArray = getState().page.todoData.filter(el => el.id !== id);
    dispatch( setTodoFetch(user.name, newArray));
    dispatch({
      type: 'DELETE_ITEM',
      payload:newArray
    })
  }
}

export function doneItem(id) {
  return (dispatch, getState) => {
    const { user } = getState();
    let newArray = getState().page.todoData;
    let index = newArray.findIndex(el => el.id === id);
    newArray[index]["done"] = !newArray[index]["done"];
    dispatch( setTodoFetch(user.name, newArray ));
    dispatch({
      type: "TOOGLE_DONE",
      payload: newArray
    });
  }
}

export function importantItem(id) {
  return (dispatch, getState) => {
    const { user } = getState();
    let newArray = getState().page.todoData;
    let index = newArray.findIndex(el => el.id === id);
    newArray[index]["important"] = !newArray[index]["important"];
    dispatch( setTodoFetch(user.name, newArray ));
    dispatch({
      type: "TOOGLE_IMPORTANT",
      payload: newArray
    });
  }
}

export const getTodo = (name) => dispatch => {
  postData('/todoGet', { name })
  .then(data => {
    console.log(data);
    dispatch({ type: "FETCH_TODO_SUCCESS", payload: data});
  })
}

export const setTodoFetch = (name, todoData) => dispatch => {
  postData('/todos', { name, todoData })
  .then(response => {
    console.log(response);
  })
}
