import { useEffect, useState } from "react";
import { URL_NAME } from "../../../data/url";
import { useNavigate } from "react-router-dom";
import { Post } from "../Post/Post";
import { Stack } from "@mui/material";
import { Loading } from "../Loading/Loading";

type PostType = {
    post: {id: number, title: string, content: string, likes: number, user_id: number, created_at: string, updated_at: string},
    tags: number[]
}

export const ForumContent = () => {

    const navigate = useNavigate();
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${URL_NAME}/posts`, {
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
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <Loading/>

    return (
        <Stack spacing={2} alignItems={"center"}>
            {postData.map((item: PostType) => { return <li key={item.post.id}><Post post={item.post} tags={item.tags}/></li> })}
        </Stack>
    );
}