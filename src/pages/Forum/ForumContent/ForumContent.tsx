import { Post } from "../Post/Post";
import { Stack } from "@mui/material";

interface PostType {
    post: {id: number, title: string, content: string, user_id: number, created_at: string, updated_at: string},
    username: string,
    tags: string[],
    likes: number,
    liked_by_user: boolean
}

type PostArray = PostType[]

export const ForumContent = (props: { postData: PostArray }) => {
    return (
        <Stack spacing={2} alignItems={"center"}>
            {props.postData.map((item: PostType) => { return <li key={item.post.id}><Post post={item.post} username={item.username} tags={item.tags} likes={item.likes} liked_by_user={item.liked_by_user}/></li> })}
        </Stack>
    );
}