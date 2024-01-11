import './comment.css'

//import mui icon
import { Person } from "@mui/icons-material";

//import relevant comment type
import { CommentType } from "../../../../../data/CommentType";

export const Comment = (props: CommentType) => {

    //extract username, content and date of comment
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