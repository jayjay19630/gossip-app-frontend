import { useEffect, useState } from "react";
import { URL_NAME } from "../data/url";
import { useNavigate } from "react-router-dom";

interface Comment {
    id: number,
    content: string,
    post_id: number,
    user_id: number,
    created_at: string,
    updated_at: string
}

type PostType = {
    post: {id: number, title: string, content: string, likes: number, user_id: number, created_at: string, updated_at: string},
    username: string
    tags: string[]
    comments: Comment[]
}

export const usePostById = (postId: number) => {
    const navigate = useNavigate();
    const [postData, setPostData] = useState<PostType>({post: {id: 0, title: '', content: '', likes: 0, user_id: 0, created_at: '', updated_at: ''}, username: '', tags: [], comments: []});
    const [loading, setLoading] = useState(true);

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
            })
            .finally(() => setLoading(false))
    }, [])

    return { postData, loading };
}