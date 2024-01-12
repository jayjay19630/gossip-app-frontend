//import useparams to detect post id
import { useParams } from "react-router-dom"

//import relevant util functions and components
import { Navbar } from "../../components/Navbar/Navbar";
import { Post } from "./Post/Post";
import { Loading } from "../../components/Loading/Loading";
import { usePostById } from "../../utils/usePostById";
import { PostByIdType } from "../../data/PostType";

//view component which shows an individual post with a comment section
export const View = () => {

    //extracting post id and post data
    let { postId } = useParams();
    let { postData, loading } = usePostById(postId, undefined, undefined) as { postData: PostByIdType | undefined, loading: boolean };

    //rendering component depending on loading state
    if (loading) return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <Loading/>
        </>
    );

    //asserting that postData will be of posttype after fetching
    postData = postData as PostByIdType;

    return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <Post post={postData.post} username={postData.username} tags={postData.tags} comments={postData.comments}/>
        </>
    );
}