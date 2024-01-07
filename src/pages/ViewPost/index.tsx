import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Navbar } from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { URL_NAME } from "../../data/url";
import './index.css'
import { ViewPost } from "./Post/Post";
import { Loading } from "../Forum/Loading/Loading";

export const View = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);
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