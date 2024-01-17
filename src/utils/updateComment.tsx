import { URL_NAME } from "../data/url";

export const updateComment = (comment_id: string, content: string, postId: string | null) => {

    //fetch hook for updating post by id
    console.log(postId);
    return fetch(`${URL_NAME}/posts/${postId}/comments/${comment_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
            },
            body: JSON.stringify({
                comment: {
                    content: content,
                    user_id: localStorage.getItem('user_id'),
                }
            })
        })
}