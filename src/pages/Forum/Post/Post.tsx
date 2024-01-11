import { Card, CardActionArea, CardActions, CardContent, IconButton, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import './Post.css'
import { Favorite } from '@mui/icons-material';
import { Tag } from '../../../components/tags/tag';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type PostType = {
    post: {id: number, title: string, content: string, likes: number, user_id: number, created_at: string, updated_at: string},
    username: string
    tags: string[]
}
const wordlimit = 115;

export const Post = (props: PostType) => {

    const content = props.post.content;
    const shortenedContent = content.length > wordlimit ? content.substring(0, wordlimit) + "..." : content;

    const dateObject = new Date(props.post.updated_at)
    const date = dateObject.toDateString();

    const username = props.username;
    const likes = props.post.likes;
    const tags = props.tags;
    const post_id  = props.post.id.toString();

    const [selected, setSelected] = useState(false);
    const handleLike = () => {
        setSelected(!selected);
    }

    const navigate = useNavigate();

    return (
        <Card sx={{ width: 700 }} key={props.post.id}>
            <CardActionArea disableRipple sx={{backgroundColor: "#f0f0f0"}} onClick={() => navigate(post_id)}>
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