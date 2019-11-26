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
          body: JSON.stringify(data),
    })
      .then(response => response.json())
      .catch((e)=>console.error(e))
}

export function registrUser(user) {
    return (dispatch) => {
        postData('/registration', user)
        .then(response => {
            if (response.status === "OK") {
                dispatch({
                    type: 'VERIFICATE_USER',
                    payload: user.login,
                    status: response.status,
                });
            } else {
                dispatch({
                    type: 'VERIFICATE_USER',
                    payload: "anonim",
                    status: response.status
                })
            }
        })
    }
}

export function verificateUser(user) {
    return (dispatch) => {
        postData('/verificate', user)
        .then(response => {
            if (response.status === "OK") {
                if (user.checked) {
                    localStorage.setItem("user", user.login);
                }
                dispatch({
                    type: 'VERIFICATE_USER',
                    payload: user.login,
                    status: response.status
                });
            } else {
                dispatch({
                    type: 'VERIFICATE_USER',
                    payload: "anonim",
                    status: response.status
                })
            }
        })
    }
}

export function logoutUser() {
    localStorage.removeItem("user");
    return {
        type: 'LOGOUT_USER',
        payload: 'anonim',
        status: undefined,
    };
}

export function localUser() {
    return {
        type: 'LOCAL_USER',
        payload: localStorage.getItem("user"),
    }
}