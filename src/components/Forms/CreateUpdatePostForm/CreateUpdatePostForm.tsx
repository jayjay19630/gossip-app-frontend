import { useForm } from "react-hook-form";
import { URL_NAME } from "../../../data/url";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { Button, TextField } from "@mui/material";
import './createupdatepostform.css';
import { useState } from "react";
import { TagList } from "../../taglist/TagList";

type FormValues = {
    title: string;
    content: string;
}

export const CreateUpdatePostForm = () => {

    const form = useForm({
        defaultValues: {
            title: "",
            content: ""
        }
    })

    const navigate = useNavigate();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const [ toggledTagsArr, setToggledTagsArr ] = useState([]);

    const PostSubmit = (data: FormValues) => {
        fetch(`${URL_NAME}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                post: {
                    title: data.title,
                    content: data.content,
                    user_id: localStorage.getItem('user_id'),
                    tag_ids: toggledTagsArr,
                }
            })
        })
            .then((response) => {
                return response.json();
            })
            .then(() => {
                navigate("/posts")
            })
    }
    

    return (
        <form className="create-post" onSubmit={handleSubmit(PostSubmit)} noValidate>
            <Stack spacing={2} width={845}>
                <h1>Create New Post</h1>
                <TextField
                    label="Title" 
                    type="post-title" 
                    {...register("title", {required: 'Title is required'})}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    InputLabelProps={{
                        style: { padding: 0 }, 
                    }}
                />
                <TextField 
                    label="Content"
                    type="post-content" 
                    {...register("content", {required: 'Content is required'})}
                    error={!!errors.content}
                    helperText={errors.content?.message}
                    InputLabelProps={{
                        style: { padding: 0 }, 
                    }}
                    multiline
                    rows={6}
                />
                <h4 className="choose-tag-name">Choose relevant tags</h4>
                <TagList passChildData={setToggledTagsArr} tagsArr={toggledTagsArr}/>
                <Button className="post-button" type="submit" sx={{backgroundColor: "orange", color: "black", fontSize: 10, borderRadius: 12, width: 50, alignSelf: 'end' }}>Post</Button>
            </Stack>
        </form>
    )
}