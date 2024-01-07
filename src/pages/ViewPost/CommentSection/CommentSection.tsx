import { CreateComment } from '../AddComment/AddComment';
import { Comment } from '../Comment/Comment';
import './commentsection.css';

interface CommentType {
    id: number,
    content: string,
    username: string,
    created_at: string,
}

type CommentsType = {
    comments: CommentType[]
}


export const CommentSection = (props: CommentsType) => {

    const comments = props.comments

    return (
        <div>
            <CreateComment/>
            {comments.map(comment => <Comment key={comment.id} content={comment.content} username={comment.username} created_at={comment.created_at}></Comment>)}
        </div>
    )
}