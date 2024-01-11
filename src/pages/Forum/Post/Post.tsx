import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import './Post.css'
import { Favorite } from '@mui/icons-material';
import { Tag } from '../../../components/tags/tag';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { URL_NAME } from '../../../data/url';

type PostType = {
    post: {id: number, title: string, content: string, user_id: number, created_at: string, updated_at: string},
    username: string,
    tags: string[],
    likes: number
    liked_by_user: boolean
}
const wordlimit = 115;

export const Post = (props: PostType) => {

    const content = props.post.content;
    const shortenedContent = content.length > wordlimit ? content.substring(0, wordlimit) + "..." : content;

    const dateObject = new Date(props.post.updated_at)
    const date = dateObject.toDateString();

    const username = props.username;
    const [ likes, setLikes ] = useState(props.likes);
    const liked_by_user = props.liked_by_user;
    const tags = props.tags;
    const post_id  = props.post.id

    const [selected, setSelected] = useState(liked_by_user);
    const handleLike = () => {
        setSelected(!selected);
        if (!selected) {
            fetch(`${URL_NAME}/posts/${post_id}/increment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token') 
                },
            })
                .then(response => {
                    if (response.status===401) {
                        navigate('/login');
                    }
                })
        setLikes(likes + 1);
        } else {
            fetch(`${URL_NAME}/posts/${post_id}/decrement`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token') 
                },
            })
                .then(response => {
                    if (response.status===401) {
                        navigate('/login');
                    }
                })
            setLikes(likes - 1);
        } 
    }

    const navigate = useNavigate();

    return (
        <Card sx={{ width: 700 }} key={post_id}>
            <CardActionArea disableRipple sx={{backgroundColor: "#f0f0f0"}} onClick={() => navigate(post_id.toString())}>
                <CardContent>
                    <Typography sx={{fontSize: 15, fontWeight: 550}} component="div">
                        {props.post.title}
                    </Typography>
                    <Typography sx={{fontSize: 12, fontWeight: 550}} gutterBottom>
                        {" by " + username} 
                    </Typography>
                    <Typography sx={{fontSize: 12}} gutterBottom >
                        {shortenedContent}
                    </Typography>
                    <Typography sx={{fontSize: 12}}>
                        {"Last updated " + date} 
                    </Typography>
                </CardContent>
            </CardActionArea>            
            <CardActions disableSpacing sx={{height: 25}}>
                <IconButton onClick={handleLike}>
                    <Favorite sx={{ fill: selected ? 'red' : 'gray' }}></Favorite>
                </IconButton>                    
                <Typography sx={{fontSize: 12}}>
                        {likes + " Likes"} 
                </Typography>
                {tags.map(tag => <Tag key={tag} tagname={tag} clickable={false} onPost={true}></Tag>)}
            </CardActions>
        </Card>
    );
}