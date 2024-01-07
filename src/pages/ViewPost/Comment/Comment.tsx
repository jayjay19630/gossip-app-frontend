import { Person } from "@mui/icons-material";
import './comment.css'

type Comment = {
    content: string,
    username: string,
    created_at: string,
}

export const Comment = (props: Comment) => {

    const username = props.username
    const content = props.content
    const dateObject = new Date(props.created_at)
    const date = dateObject.toDateString();

    return (
        <div className="comment">
            <div className="comment-header"> 
                <Person></Person>
                {username}
            </div>
            <div className="comment-body">
                {content}
            </div>
            <div className="comment-footer">
                {date}
            </div>
            
        </div>
    );
}