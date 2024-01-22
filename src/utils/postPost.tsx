import { URL_NAME } from "../../config"


export const createPost = (title: string, content: string, tagsArr: number[]) => {
    return fetch(`${URL_NAME}/posts`, {
        method: 'POST',
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