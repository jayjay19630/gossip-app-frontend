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
    const [postData, setPostData] = useState([]);
    const [tagData, setTagData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        //get all posts on mount
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
        
        //get all tags on mount
        fetch(`${URL_NAME}/tags`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
            },
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTagData(data);
            })
            .finally(() => setLoading(false));
    }, [])

    //create loading screen while fetching
    if (loading) return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <Loading/>
        </>
    );

    //show all posts after fetching
    return (
        <div className='forum'>
            <Navbar onHomePage={false} onForumPage={true}/>
            <SearchBar tagData={tagData}/>
            <ForumContent postData={postData}/>
        </div>
    );
}