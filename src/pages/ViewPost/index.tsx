import { useNavigate, useParams } from "react-router-dom"
import { Navbar } from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { URL_NAME } from "../../data/url";
import './index.css'
import { ViewPost } from "./Post/Post";
import { Loading } from "../Forum/Loading/Loading";

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

export const View = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [postData, setPostData] = useState<PostType>({post: {id: 0, title: '', content: '', likes: 0, user_id: 0, created_at: '', updated_at: ''}, username: '', tags: [], comments: []});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${URL_NAME}/posts/${params.postId}`, {
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
                console.log(data);
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <Loading/>
        </>
    );

    return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <ViewPost post={postData.post} username={postData.username} tags={postData.tags} comments={postData.comments}/>
        </>
    );
}