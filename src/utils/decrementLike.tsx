import { URL_NAME } from "../../config";

export const decrementLike = (post_id: number) => {

    return fetch(`${URL_NAME}/posts/${post_id}/decrement`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token') 
        },
    })

}