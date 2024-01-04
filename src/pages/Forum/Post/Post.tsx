import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import './Post.css'
import { Favorite } from '@mui/icons-material';

type PostType = {
    post: {id: number, title: string, content: string, likes: number, username: string, created_at: string, updated_at: string},
    username: string
    tags: number[]
}
const wordlimit = 100;

export const Post = (props: PostType) => {

    const content = props.post.content;
    const shortenedContent = content.length > wordlimit ? content.substring(0, wordlimit) + "..." : content;

    const dateObject = new Date(props.post.updated_at)
    const date = dateObject.toDateString();

    const username = props.username;
    const likes = props.post.likes;

    return (
        <Card sx={{ width: 700 }} key={props.post.id}>
            <CardActionArea disableRipple sx={{backgroundColor: "#f0f0f0"}}>
                <CardContent>
                    <Typography sx={{fontSize: 15, fontWeight: 550}} component="div">
                        {props.post.title}
                    </Typography>
                    <Typography sx={{fontSize: 12, fontWeight: 550}} gutterBottom>
                        {"by " + username}
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
            </CardActions>

            
        </Card>
    );
}