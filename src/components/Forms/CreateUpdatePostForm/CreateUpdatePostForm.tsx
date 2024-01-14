import './createupdatepostform.css';

//importing react hook form, router and mui library components
import { useForm } from "react-hook-form";
import { Stack } from "@mui/system";
import { Button, TextField } from "@mui/material";

//importing useState from react
import { useEffect, useState } from "react";

//importing relevant components and utils
import { createPost } from "../../../utils/postPost";
import { updatePost } from '../../../utils/updatePost';
import { usePostById } from '../../../utils/usePostById';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../../utils/deletePost';
import { TagList } from '../../Taglist/TagList';

//form component for creating and updating posts
export const CreateUpdatePostForm = (props: {state: string, postId: string | undefined}) => {

    //navigate function
    const navigate = useNavigate();

    //extract default title and content if form is editing a post
    const postIdStr = props.postId as string;
    const [defaultTitle, setDefaultTitle] = useState("");
    const [defaultContent, setDefaultContent] = useState("");

    //creating form using react hook form library and resetting default value after api call
    if (props.state === "edit") {
        usePostById(postIdStr, setDefaultTitle, setDefaultContent);
    }
    const form = useForm({
        defaultValues: {
            title: defaultTitle,
            content: defaultContent
        }
    })
    const { register, handleSubmit, formState, reset } = form;
    const { errors } = formState;
    useEffect(() => {
        reset({
            title: defaultTitle,
            content: defaultContent
          });
    }, [defaultTitle]);

    //creating state for list of tags selected by user during creation of post
    const [ toggledTagsArr, setToggledTagsArr ] = useState([]);

    //onSubmit function upon creation of post
    const onCreateSubmit = (data: {title: string, content: string}) => {
        createPost(data.title, data.content, toggledTagsArr).then(() => navigate('/posts'));
    }
    
    //onSubmit function upon updating post
    const onEditSubmit = (data: {title: string, content: string}) => {
        updatePost(data.title, data.content, toggledTagsArr, postIdStr).then(() => navigate('/posts'));
    }

    //function open deleting post
    const onDelete = (postId: string) => {
        deletePost(postId).then(() => navigate('/posts'));
    }

    //renders form component conditionally depending on whether 
    //the form state is an edit form or a create form
    return (
        <form className="create-update-post" onSubmit={handleSubmit(props.state === "create" ? onCreateSubmit : onEditSubmit)} noValidate>
            <Stack spacing={2} width={845}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <h1>{props.state === "create" ? "Create New Post" : "Edit Post"}</h1>
                    {props.state === 'edit' && <Button sx={{ backgroundColor: 'red', color: 'white', height: 30, fontSize: 16 }}onClick={() => onDelete(postIdStr)}>Delete</Button>}
                </Stack>
                <TextField
                    label="Title" 
                    type="post-title" 
                    defaultValue=""
                    {...register("title", {required: 'Title is required'})}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    InputLabelProps={{
                        style: { padding: 0 }, 
                        shrink: true
                    }}
                    
                />
                <TextField 
                    label="Content"
                    defaultValue=""
                    type="post-content" 
                    {...register("content", {required: 'Content is required'})}
                    error={!!errors.content}
                    helperText={errors.content?.message}
                    InputLabelProps={{
                        style: { padding: 0 }, 
                        shrink: true
                    }}
                    multiline
                    rows={6}
                />
                <h4 className="choose-tag-name">Choose relevant tags</h4>
                <TagList passChildData={setToggledTagsArr} tagsArr={toggledTagsArr}/>
                <Button className="post-button" type="submit" sx={{backgroundColor: "orange", color: "black", fontSize: 10, borderRadius: 12, width: 50, alignSelf: 'end' }}>{props.state === 'create' ? "Post" : "Update"}</Button>
            </Stack>
        </form>
    )
}