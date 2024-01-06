import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/navbar/Navbar';
import { ForumContent } from './ForumContent/ForumContent';
import { SearchBar } from './SearchBar/SearchBar';
import './index.css'
import { useEffect, useState } from 'react';
import { URL_NAME } from '../../data/url';
import { Loading } from './Loading/Loading';

export const Forum = () => {

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
                console.log(data);
            })
            .finally(() => setLoading(false));
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
            <SearchBar/>
            <ForumContent postData={postData}/>
        </>
    );
}