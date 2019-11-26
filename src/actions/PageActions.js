function fetchData(url = '', data = {}, method) {
  // Значения по умолчанию обозначены знаком *
    return fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
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
  return ( dispatch, getState ) => {
    const { user } = getState();
    let name = user.name;
    fetchData('/todoSet', { name, task }, "POST")
    .then(response => {
      dispatch({
            type: 'SET_TODO',
            payload: response
       })
    })
  }
}

export function deleteItem(id) {
  return ( dispatch, getState ) => {
    const { user } = getState();
    let name = user.name;
    fetchData('/delete', { name, idTast: id }, "DELETE")
    .then(response => {
      dispatch({
            type: 'DELETE_ITEM',
            payload: response
       })
    })
  }
  // return (dispatch,getState) =>{
  //   // const { user } = getState();
  //   // dispatch( setTodoFetch(user.name, newArray));
  //   dispatch({
  //     type: 'DELETE_ITEM',
  //     payload: newArray
  //   })
  // }
}

export function toogleItem(id, proper) {
  return ( dispatch, getState ) => {
    const { user } = getState();
    let name = user.name;
    fetchData('/toogle', { name, idTast: id, proper }, "PUT")
    .then(response => {
      console.log(response);
      dispatch({
        type: "TOOGLE",
        payload: response
      });
    })
  }
}

export const getTodo = (name) => dispatch => {
  fetchData('/todoGet', { name }, "POST")
  .then(data => {
    console.log(data);
    dispatch({ type: "FETCH_TODO_SUCCESS", payload: data});
  })
}

// export const setTodoFetch = (name, todoData) => dispatch => {
//   postData('/todos', { name, todoData })
//   .then(response => {
//     console.log(response);
//   })
// }
