import { useEffect, useState } from "react";
import { URL_NAME } from "../../config";
import { useNavigate } from "react-router-dom";

//custom hook for getting all posts
export const usePosts = () => {

    //store posts and loading state in useState hooks
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);

    //navigate function for when user is not authenticated
    const navigate = useNavigate();

    //fetching on mount
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
            .finally(() => setLoading(false))
    }, []);
    
    return { postData, loading };
}