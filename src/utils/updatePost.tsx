import { URL_NAME } from "../../config";

export const updatePost = (title: string, content: string, tagsArr: number[], postId: string) => {

    //fetch hook for updating post by id
    return fetch(`${URL_NAME}/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    content: content,
                    user_id: localStorage.getItem('user_id'),
                    tag_ids: tagsArr,
                }
            })
        })
}