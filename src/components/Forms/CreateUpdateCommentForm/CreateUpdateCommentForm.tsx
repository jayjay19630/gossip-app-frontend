import './CreateUpdateCommentForm.css'

//import reacthookform library, router library and mui components
import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

//import relevant utils
import { postComment } from "../../../utils/postComment";
import { updateComment } from '../../../utils/updateComment';

//component that allows users to create comments
export const CreateUpdateCommentForm = (props: {postid: number, commentid: number, state: string}) => {

    console.log(props.postid);
    console.log(props.commentid);
    //state can be edit mode or create mode
    const state = props.state;

    //navigate function to refresh page once comment is submitted
    const navigate = useNavigate();

    //use react hook form library to create form
    const form = useForm({
        defaultValues: {
            content: ""
        }
    })
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
   
    //onSubmit function to send data in form and refresh page
    const onPostSubmit = (data: { content: string }) => {
        postComment(data.content, props.postid);
        navigate(0);
    }

    const onUpdateSubmit = (data: {content : string}) => {
        updateComment(props.commentid.toString(), data.content, props.postid.toString());
        navigate(0);
    }

    return (
        <form className="create-comment" onSubmit={handleSubmit(state === "create" ? onPostSubmit : onUpdateSubmit)} noValidate>
            {state === "create" && <div className="comment-header">Comment as {localStorage.getItem('username')}</div>}
            <Stack spacing={2} width={845}>
                <TextField 
                    type="comment" 
                    {...register("content", {required: 'Content is required'})}
                    error={!!errors.content}
                    helperText={errors.content?.message}
                    InputLabelProps={{
                        style: { padding: 0 }, 
                    }}
                    multiline
                    rows={state === "create" ? 6 : 1}
                />
                <Button className="comment-button" type="submit" sx={{backgroundColor: "orange", color: "black", fontSize: 10, borderRadius: 12, width: 50, alignSelf: 'end' }}>Comment</Button>
            </Stack>

        </form>
    );
}