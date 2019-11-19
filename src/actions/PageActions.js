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
  return {
    type: "SET_TODO",
    payload: task
  };
}

export function deleteItem(id) {
 
 return (dispatch,getState) =>{
  console.log(getState());
  const { user } = getState();
  let newArray = getState().page.todoData.filter(el => el.id !== id);
  dispatch( setTodoFetch(user.name, newArray))

dispatch({

  type: 'DELETE_ITEM',
  payload:newArray
})

 }
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

export const setTodoFetch = (name, todoData) => dispatch => {
  postData('/todos', { name, todoData })
  .then(response => {
    console.log(response);
  })
}
