import './Post.css'

//import ui and icons from mui library
import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';

//import state and navigate from react packages
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//import relevant components, types and util functions
import { Tag } from '../../../../components/tags/Tag';
import { PostType } from '../../../../data/PostType';
import { incrementLike } from '../../../../utils/incrementLike';
import { decrementLike } from '../../../../utils/decrementLike';

//Post component on forum page showing shortened version of content with title, tags and like feature
export const Post = (props: PostType) => {

    //extracting post author, tags and post id from props data
    const username = props.username;
    const tags = props.tags;
    const post_id  = props.post.id

    //extracting content from props data with word limit
    const content = props.post.content;
    const wordlimit = 115;
    const shortenedContent = content.length > wordlimit ? content.substring(0, wordlimit) + "..." : content;

    //extracting data from props data
    const dateObject = new Date(props.post.updated_at)
    const date = dateObject.toDateString();

    //extracting number of likes into state and whether user has liked post
    const [ likes, setLikes ] = useState(props.likes);
    const liked_by_user = props.liked_by_user;
    
    //creating state for when post is liked. create handlelike button to handle incrementing/decrementing likes on post
    const [selected, setSelected] = useState(liked_by_user);
    const handleLike = () => {
        setSelected(!selected);
        if (!selected) {
            incrementLike(post_id);
            setLikes(likes + 1);
        } else {
            decrementLike(post_id);
            setLikes(likes - 1);
        } 
    }

    //navigate function for when user clicks on the post
    const navigate = useNavigate();

    //post component that directs user to view specific post when clicked. 
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
                {tags.map(tag => <Tag key={tag} tagname={tag} clickable={false} id={tag} tagsArr={[]} passChildData={undefined}></Tag>)}
            </CardActions>
        </Card>
    );
}