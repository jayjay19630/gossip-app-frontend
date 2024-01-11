import { URL_NAME } from "../data/url";

export const decrementLike = (post_id: number) => {

    fetch(`${URL_NAME}/posts/${post_id}/decrement`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token') 
        },
    })

}