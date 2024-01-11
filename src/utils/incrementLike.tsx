import { URL_NAME } from "../data/url";

export const incrementLike = (post_id: number) => {

    return fetch(`${URL_NAME}/posts/${post_id}/increment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token') 
        },
    })
    
}