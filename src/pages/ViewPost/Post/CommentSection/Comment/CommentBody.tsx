import './CommentBody.css'

//component for comment body
export const CommentBody = (props: {content: string, date: string}) => {
    return (
        <>
            <div className="comment-body">
                {props.content}
            </div>
            <div className="comment-footer">
                {props.date}
            </div>
        </>
    )
}

