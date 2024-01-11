import './createcommentform.css'

//import reacthookform library, router library and mui components
import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

//import relevant utils
import { postComment } from "../../../utils/postComment";

//component that allows users to create comments
export const CreateCommentForm = (props: {postid: number}) => {

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
    const onSubmit = (data: { content: string }) => {
        postComment(data.content, props.postid);
        navigate(0);
    }

    return (
        <form className="create-comment" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="comment-header">Comment as {localStorage.getItem('username')}</div>
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
                    rows={6}
                />
                <Button className="comment-button" type="submit" sx={{backgroundColor: "orange", color: "black", fontSize: 10, borderRadius: 12, width: 50, alignSelf: 'end' }}>Comment</Button>
            </Stack>

        </form>
    );
}