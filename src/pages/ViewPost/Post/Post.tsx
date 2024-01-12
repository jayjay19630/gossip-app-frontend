import './Post.css'

//import ui from mui library
import { Button, Card, CardActions, CardContent, Divider, Stack, Typography } from '@mui/material'

//import relevant components and types
import { CommentSection } from './CommentSection/CommentSection'
import { Tag } from '../../../components/Tag/Tag'
import { PostByIdType } from '../../../data/PostType'
import { Link } from 'react-router-dom'

export const Post = (props: PostByIdType) => {

    //extract title, date, tags, author and content from props data
    const title = props.post.title;
    const dateObject = new Date(props.post.updated_at)
    const date = dateObject.toDateString();
    const tags = props.tags;
    const username = props.username;
    const content = props.post.content;

    //getting logged in username
    const current_user = localStorage.getItem('username');

    return (
        <div className='body'>
            <Card sx={{ width: 900 }} key={props.post.id}>
                <CardActions disableSpacing sx={{ marginTop: 1 , marginLeft: 1}}>
                    <Typography sx={{fontSize: 24, fontWeight: 550}}>
                        {title} 
                    </Typography>   
                    {tags.map(tag => <Tag key={tag} tagName={tag} clickable={false} id={tag} tagsArr={[]} passChildData={undefined}></Tag>)}
                </CardActions>
                <CardContent sx={{paddingTop: 0}}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Typography sx={{fontSize: 12, color: 'gray'}} gutterBottom>
                            {"Posted by " + username + ", last updated " + date} 
                        </Typography>
                        {username === current_user && <Link to='edit'><Button className="edit-button" sx={{backgroundColor: "orange", color: "black", fontSize: 10, borderRadius: 1, width: 100, alignSelf: 'end' }}>Edit Content</Button></Link>}
                    </Stack>   
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