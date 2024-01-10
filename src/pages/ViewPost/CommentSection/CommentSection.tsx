import { CreateComment } from '../CreateComment/CreateComment';
import { Comment } from '../Comment/Comment';
import './commentsection.css';

interface Comment {
    id: number,
    content: string,
    username: string,
    created_at: string,
}

type CommentsType = {
    comments: Comment[],
    postid: number
}


export const CommentSection = (props: CommentsType) => {

    const comments = props.comments;
    const orderedComments = comments.slice().reverse();
    const postid = props.postid;
    const numberOfComments = comments.length

    return (
        <div className='comment-section'>
            <CreateComment postid={postid}/>
            <div className="comment-number">{numberOfComments} comments</div>
            <div className='zero-comments'>{numberOfComments === 0 && "This comment section is empty. Add something to the conversation!"}</div>
            {orderedComments.map(comment => <Comment key={comment.id} content={comment.content} username={comment.username} created_at={comment.created_at}></Comment>)}
        </div>
    )
}