import './createupdatepostform.css';

//importing react hook form, router and mui library components
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { Button, TextField } from "@mui/material";

//importing useState from react
import { useState } from "react";

//importing relevant components and utils
import { TagList } from "../../../pages/CreatePost/Taglist/TagList";
import { createPost } from "../../../utils/postPost";

//form component for creating and updating posts
export const CreateUpdatePostForm = (props: {state: string}) => {

    //navigate function
    const navigate = useNavigate();

    //creating form using react hook form library
    const form = useForm({
        defaultValues: {
            title: "",
            content: ""
        }
    })
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    //creating state for list of tags selected by user during creation of post
    const [ toggledTagsArr, setToggledTagsArr ] = useState([]);

    //onSubmit function upon creation of post
    const onCreateSubmit = (data: {title: string, content: string}) => {
        createPost(data.title, data.content, toggledTagsArr).then(() => navigate("/posts"));
    }
    
    const onEditSubmit = (data: {title: string, content: string}) => {
        
    }

    //renders form component conditionally depending on whether 
    //the form state is an edit form or a create form
    return (
        <form className="create-update-post" onSubmit={handleSubmit(props.state === "create" ? onCreateSubmit : onEditSubmit)} noValidate>
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