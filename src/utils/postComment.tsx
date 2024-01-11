import { URL_NAME } from "../data/url";

export const postComment = (content: string, post_id: number) => {
    fetch(`${URL_NAME}/posts/${post_id}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            comment: {
                content: content, 
                user_id: localStorage.getItem('user_id'),
                post_id: post_id
            }
        })
    })
        .then((response) => {
            return response.json();
        })
}