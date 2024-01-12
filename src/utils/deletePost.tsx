import { URL_NAME } from "../data/url"


export const deletePost = (postId: string) => {

    //fetch to delete post
    return fetch(`${URL_NAME}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    })

}