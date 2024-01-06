import { Post } from "../Post/Post";
import { Stack } from "@mui/material";

interface PostType {
    post: {id: number, title: string, content: string, likes: number, user_id: number, created_at: string, updated_at: string},
    username: string
    tags: number[]
}

type PostArray = PostType[]

export const ForumContent = (props: { postData: PostArray }) => {
    return (
        <Stack spacing={0.1} alignItems={"center"}>
            {props.postData.map((item: PostType) => { return <li key={item.post.id}><Post post={item.post} username={item.username} tags={item.tags}/></li> })}
        </Stack>
    );
}