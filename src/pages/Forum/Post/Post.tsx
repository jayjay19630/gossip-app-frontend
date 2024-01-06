import { Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material';
import './Post.css'
import { Favorite } from '@mui/icons-material';
import { Tag } from '../../../components/tags/tag';

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
    const tags = props.tags

    return (
        <Card sx={{ width: 700 }} key={props.post.id}>
            <CardActionArea disableRipple sx={{backgroundColor: "#f0f0f0"}}>
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
                <IconButton aria-label="add to favorites">
                    <Favorite/>
                </IconButton>
                <Typography sx={{fontSize: 12}}>
                        {likes + " Likes"} 
                </Typography>
                {tags.map(tag => <Tag tagname={tag} clickable={false} onPost={true}></Tag>)}
            </CardActions>
        </Card>
    );
}