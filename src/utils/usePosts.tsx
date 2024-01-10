import { useEffect, useState } from "react";
import { URL_NAME } from "../data/url";
import { useNavigate } from "react-router-dom";

export const usePosts = () => {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
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