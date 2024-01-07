import './commentsection.css';

interface Comment {
    id: number,
    content: string,
    post_id: number,
    user_id: number,
    created_at: string,
    updated_at: string
}

type CommentsType = {
    comments: Comment[]
}


export const CommentSection = (props: CommentsType) => {
    return (
        <div>
            <h3>Comments</h3>
        </div>
    )
}