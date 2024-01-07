import { Stack } from '@mui/material'
import { Navbar } from '../../components/navbar/Navbar'
import './index.css'
import { PostForm } from '../../components/form/create-update-post-form/PostForm'

export const Create = () => {
    return (
        <Stack spacing={2}>
            <Navbar onForumPage={true} onHomePage={false}/>
            <PostForm></PostForm>
        </Stack>
    )
}