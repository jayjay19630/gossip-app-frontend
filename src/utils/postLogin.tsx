import { URL_NAME } from "../data/url";

export const postLogin = (username: string, invalidUsernameHandler: Function) => {
    
    const setInvalidUsernameError = invalidUsernameHandler;

    return fetch(`${URL_NAME}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username
            }
        })
    })
        .then((response) => {
            if (response.status === 422) {
                setInvalidUsernameError(true);
            }
            return response.json();
        })
        .then((data) => {
            localStorage.setItem('username', data.user.username);
            localStorage.setItem('user_id', data.user.id);
            localStorage.setItem('token', data.token);
        })
}