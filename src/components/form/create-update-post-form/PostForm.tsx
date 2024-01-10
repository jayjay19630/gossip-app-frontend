import { useForm } from "react-hook-form";
import { URL_NAME } from "../../../data/url";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { Button, TextField } from "@mui/material";
import './postform.css';
import { useEffect, useState } from "react";

type FormValues = {
    title: string;
    content: string;
}

export const PostForm = () => {

    const form = useForm({
        defaultValues: {
            title: "",
            content: ""
        }
    })

    const navigate = useNavigate();
    const { register, handleSubmit, formState } = form;
    const [tagData, setTagData] = useState([])
    const { errors } = formState;

    useEffect(() => {
        fetch(`${URL_NAME}/tags`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
            },
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTagData(data);
            })
    }, [])

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
                    likes: 0
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
                <h5>Choose relevant tags</h5>
                <Button className="post-button" type="submit" sx={{backgroundColor: "orange", color: "black", fontSize: 10, borderRadius: 12, width: 50, alignSelf: 'end' }}>Post</Button>
            </Stack>
        </form>
    )
}