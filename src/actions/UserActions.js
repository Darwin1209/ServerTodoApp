export function registrUser(user) {
    return {
        type: 'REGISTR_USER',
        payload: user
    };
}

export function verificateUser(user) {
    return {
        type: 'VERIFICATE_USER',
        payload: user
    };
}

