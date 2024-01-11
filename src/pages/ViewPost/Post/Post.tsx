import './Post.css'

//import ui from mui library
import { Card, CardActions, CardContent, Divider, Typography } from '@mui/material'

//import relevant components and types
import { CommentSection } from './CommentSection/CommentSection'
import { Tag } from '../../../components/tags/Tag'
import { PostByIdType } from '../../../data/PostType'

export const Post = (props: PostByIdType) => {

    //extract title, date, tags, author and content from props data
    const title = props.post.title;
    const dateObject = new Date(props.post.updated_at)
    const date = dateObject.toDateString();
    const tags = props.tags;
    const username = props.username;
    const content = props.post.content;

    return (
        <div className='body'>
            <Card sx={{ width: 900 }} key={props.post.id}>
                <CardActions disableSpacing sx={{ marginTop: 1 , marginLeft: 1}}>
                    <Typography sx={{fontSize: 24, fontWeight: 550}}>
                        {title} 
                    </Typography>   
                    {tags.map(tag => <Tag key={tag} tagname={tag} clickable={false} id={tag} tagsArr={[]} passChildData={undefined}></Tag>)}
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
                <CommentSection belongsToPost={props}/>
            </Card>
        </div>
        
    );
}