import { URL_NAME } from "../../config";

export const postSignup = (username: string, alreadyTakenHandler: Function) => {
    
    const setAlreadyTakenError = alreadyTakenHandler;

    return fetch(`${URL_NAME}/users`, {
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
                setAlreadyTakenError(true);
            }
            return response.json();
        })
        .then((data) => {
            localStorage.setItem('username', data.user.username);
            localStorage.setItem('user_id', data.user.id);
            localStorage.setItem('token', data.token);
        })
}