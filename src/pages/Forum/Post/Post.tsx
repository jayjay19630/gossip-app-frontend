import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import './Post.css'

type PostType = {
    post: {id: number, title: string, content: string, likes: number, user_id: number, created_at: string, updated_at: string},
    tags: number[]
}

export const Post = (props: PostType) => {
    return (
        <Card sx={{ maxWidth: 345 }} key={props.post.id}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.post.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}