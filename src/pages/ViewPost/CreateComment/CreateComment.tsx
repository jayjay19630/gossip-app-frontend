import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { URL_NAME } from "../../../data/url";
import { Button, Stack, TextField } from "@mui/material";
import './createcomment.css'

type FormValues = {
    content: string
}

export const CreateComment = (props: {postid: number}) => {

    const form = useForm({
        defaultValues: {
            content: ""
        }
    })

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const navigate = useNavigate();

    //fetch method for creating comment
    const onSubmit = (data: FormValues) => {
        fetch(`${URL_NAME}/posts/${props.postid}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                comment: {
                    content: data.content, 
                    user_id: localStorage.getItem('user_id'),
                    post_id: props.postid
                }
            })
        })
            .then((response) => {
                return response.json();
            })
            .then(() => {
                navigate(0);
            })
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