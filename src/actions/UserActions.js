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

export function registrUser(user) {
    return {
        type: 'REGISTR_USER',
        payload: user
    };
}

export function verificateUser(user) {
    return (dispatch) => {
        console.log("Вызвался DISPATCH из USER");
        postData('/verificate', user)
        .then(response => {
            console.log(response);
            if (response.status === "OK") {
                dispatch({
                    type: 'VERIFICATE_USER',
                    payload: user.login
                });
            } else if (response.status === "INVALID_PASSWORD") {
                console.log("Неверный пароль");
            }
        })
    }
}

