export function registrUser(user) {
    return {
        type: 'REGISTR_USER',
        user
    };
}

export function verificateUser(user) {
    return {
        type: 'VERIFICATE_USER',
        user
    };
}

export function itemsFetchUserSuccess(items) {
    return {
        type: 'ITEMS_FETCH_USER_SUCCESS',
        items
    };
  }
  
  export function itemsFetchUser(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
  
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchUserSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
  }