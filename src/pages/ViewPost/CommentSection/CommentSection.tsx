import { CreateComment } from '../CreateComment/CreateComment';
import { Comment } from '../Comment/Comment';
import './commentsection.css';

interface CommentType {
    id: number,
    content: string,
    username: string,
    created_at: string,
}

type CommentsType = {
    comments: CommentType[],
    postid: number
}


export const CommentSection = (props: CommentsType) => {

    const comments = props.comments
    const postid = props.postid;

    return (
        <div className='comment-section'>
            <CreateComment postid={postid}/>
            {comments.map(comment => <Comment key={comment.id} content={comment.content} username={comment.username} created_at={comment.created_at}></Comment>)}
        </div>
    )
}