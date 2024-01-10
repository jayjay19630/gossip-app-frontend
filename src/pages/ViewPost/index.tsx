import { useParams } from "react-router-dom"
import { Navbar } from "../../components/navbar/Navbar";
import { ViewPost } from "./ViewPost/ViewPost";
import { Loading } from "../Forum/Loading/Loading";
import { usePostById } from "../../utils/usePostById";

export const View = () => {

    const { postId } = useParams();
    const { postData, loading } = usePostById(postId);

    if (loading) return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <Loading/>
        </>
    );

    return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <ViewPost post={postData.post} username={postData.username} tags={postData.tags} comments={postData.comments}/>
        </>
    );
}