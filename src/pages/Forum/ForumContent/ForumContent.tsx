//import post component and relevant types
import { Post } from "./Post/Post";
import { PostArray, PostType } from "../../../data/PostType";

//import stack ui from mui library
import { Stack } from "@mui/material";

//forum content component that displays all posts in one stack
export const ForumContent = (props: { postData: PostArray }) => {

    const postData = props.postData;

    return (
        <Stack spacing={2} alignItems={"center"}>
            {postData.map((item: PostType) => <Post key={item.post.id} post={item.post} username={item.username} tags={item.tags} likes={item.likes} liked_by_user={item.liked_by_user}/>)}
        </Stack>
    );
}