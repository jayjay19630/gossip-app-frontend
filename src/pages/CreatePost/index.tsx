import { Card, Stack } from '@mui/material'
import { Navbar } from '../../components/navbar/Navbar'
import { PostForm } from '../../components/form/create-update-post-form/PostForm'

export const Create = () => {
    return (
        <Stack spacing={2}>
            <Navbar onForumPage={true} onHomePage={false}/>
            <div className='body'>
                <Card sx={{ width: 900 }}>
                    <PostForm/>
                </Card>
            </div>
        </Stack>
    )
}