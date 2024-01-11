import { Card, CardActions, CardContent, Divider, Typography } from '@mui/material'
import './post.css'
import { CommentSection } from '../CommentSection/CommentSection'
import { Tag } from '../../../components/tags/tag'

interface Comment {
    id: number,
    content: string,
    post_id: number,
    user_id: number,
    created_at: string,
    updated_at: string
}

type PostType = {
    post: {id: number, title: string, content: string, likes: number, user_id: number, created_at: string, updated_at: string},
    username: string
    tags: string[]
    comments: Comment[]
}

export const ViewPost = (props: PostType ) => {


    const content = props.post.content;

    const dateObject = new Date(props.post.updated_at)
    const date = dateObject.toDateString();

    const title = props.post.title;
    const username = props.username;
    const tags = props.tags;
    const postid = props.post.id

    const commentsArr = props.comments;


    return (
        <div className='body'>
            <Card sx={{ width: 900 }} key={props.post.id}>
                <CardActions disableSpacing sx={{ marginTop: 1 , marginLeft: 1}}>
                    <Typography sx={{fontSize: 24, fontWeight: 550}}>
                        {title} 
                    </Typography>   
                    {tags.map(tag => <Tag key={tag} tagname={tag} clickable={false}></Tag>)}
                </CardActions>
                <CardContent sx={{paddingTop: 0}}>   
                    <Typography sx={{fontSize: 12, color: 'gray'}} gutterBottom>
                        {"Posted by " + username + ", last updated " + date} 
                    </Typography>
                    <Typography sx={{fontSize: 15}}>
                        {content} 
                    </Typography>
                    
                </CardContent>
                <Divider></Divider>
                <CommentSection comments={commentsArr} postid={postid}/>
                
            </Card>
        </div>
        
    );
}