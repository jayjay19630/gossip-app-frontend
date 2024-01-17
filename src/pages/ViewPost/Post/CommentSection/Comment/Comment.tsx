import './comment.css'

//import mui icon
import { Person } from "@mui/icons-material";

//import relevant comment type and components
import { CommentType } from "../../../../../data/CommentType";
import { Button } from '@mui/material';
import { useState } from 'react';
import { CommentBody } from './CommentBody';
import { CreateUpdateCommentForm } from '../../../../../components/Forms/CreateUpdateCommentForm/CreateUpdateCommentForm';

export const Comment = (props: CommentType) => {

    //extract username, content and date of comment
    const username = props.username
    const loggedInUsername = localStorage.getItem('username');
    const content = props.content
    const dateObject = new Date(props.created_at)
    const date = dateObject.toDateString();

    //state for edit mode and view mode
    const [mode, setMode] = useState("view");

    //onsubmit button for changing between mode
    const onClick = () => {
        if (mode === "edit") {
            setMode("view");
        } else {
            setMode("edit");
        }
    }

    return (
        <div className="comment">
            <div className="comment-header"> 
                <Person></Person>
                {username}
                {username === loggedInUsername && <Button className="comment-button" onClick={onClick} sx={{backgroundColor: "orange", color: "black", marginLeft: 2, fontSize: 10, borderRadius: 2, width: 100, alignSelf: 'end' }}>{mode === "view" ? "Edit Comment" : "Go Back"}</Button>}
            </div>
            {mode === "view" && <CommentBody content={content} date={date}></CommentBody>}
            {mode === "edit" && <CreateUpdateCommentForm postid={0} state='edit'></CreateUpdateCommentForm>}
            
        </div>
    );
}