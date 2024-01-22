import { useEffect, useState } from "react";
import { URL_NAME } from "../../config";
import { useNavigate } from "react-router-dom";
import { PostByIdType } from "../data/PostType";

export const usePostById = (postId: string | undefined, setDefaultTitle: Function | undefined, setDefaultContent: Function | undefined) => {

    //navigate function for when user is not authenticated by JWT
    const navigate = useNavigate();

    //store post and loading data in states
    const [postData, setPostData] = useState() as [PostByIdType, Function];
    const [loading, setLoading] = useState(true);

    //fetch hook for getting post by id
    useEffect(() => {
        fetch(`${URL_NAME}/posts/${postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
            },
        })
            .then(response => {
                if (response.status===401) {
                    navigate('/login');
                }
                return response.json();
            })
            .then(data => {
                setPostData(data);
                if (setDefaultContent !== undefined && setDefaultTitle !== undefined) {
                    if (data.username !== localStorage.getItem('username')) {
                        navigate('/error');
                    }
                    setDefaultTitle(data.post.title);
                    setDefaultContent(data.post.content);
                }
            })
            .finally(() => setLoading(false))
    }, [])

    return { postData, loading };
}